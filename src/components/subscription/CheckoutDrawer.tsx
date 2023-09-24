import React, { useState, useContext } from "react"
import { Box, Drawer, Text, Flex, Radio, Select, UnstyledButton, Collapse } from "@mantine/core"
import Paystack from "./Paystack";
import Voucher from "./Voucher";
import Airtime from "./Airtime";
import backArrow from '../../assets/svgs/back-arw.svg'
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext"
import AirtimeSummaryCard from "./AirtimeSummaryCard";
import PaystackSummaryCard from './PaystackSummaryCard'
import { useMutation } from "react-query";
import { makeVoucherPayment, verifyVoucher } from "@/services/subscriptions";
import toast, { Toaster } from "react-hot-toast";
import { usePaystackPayment } from 'react-paystack';
import { convertNairaToKobo } from "@/helpers/functions/convertNairaToKobo";
import { getCookieItem, setCookieItem } from "@/helpers/functions/cookie";

export default function CheckoutDrawer({
  opened,
  close,
  openAddSubjects,
  cart
}: any) {
  const { user, setUser } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const [step, setStep] = useState('cart')
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [verifiedVoucher, setVerifiedVoucher] = useState<null | {}>(null)
  const [networkProvider, setNetworkProvider] = useState('mtn');
  const [billingPlan, setBillingPlan] = useState<string | null>('monthly');
  const [voucherCode, setVoucherCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<string | number>('')
  const [error, setError] = useState<any>({
    billingPlan: false,
    voucherCode: false,
    phoneNumber: false
  })
  const [errorMessage, setErrorMessage] = useState({
    billingPlan: '',
    voucherCode: '',
    phoneNumber: ''
  })
  const [isLoading, setIsLoading] = useState({
    paystack: false,
    voucher: false,
    airtime: false
  })

  const paystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: user?.data?.student?.email,
    amount: convertNairaToKobo(cart.price),
    publicKey: process.env.PAYSTACK_PUBLIC_KEY ? process.env.PAYSTACK_PUBLIC_KEY : ''
  };

  const initializePayment: any = usePaystackPayment(paystackConfig);

  const handleVoucher = () => {
    if (!billingPlan) {
      setError({
        ...error,
        billingPlan: true
      })
      setErrorMessage({
        ...errorMessage,
        billingPlan: 'Billing plan is required'
      })
    } else if (!voucherCode) {
      setError({
        ...error,
        voucherCode: true
      })
      setErrorMessage({
        ...errorMessage,
        voucherCode: 'Voucher code is required'
      })
    } else {
      checkVoucherMutation.mutate()
    }
  }

  const handleAirtmePayment = () => {
    setIsLoading({
      ...isLoading,
      airtime: true
    })
  }

  const handlePaystack = () => {
    setIsLoading({
      ...isLoading,
      paystack: true
    })

    const onSuccess = (reference: any) => {
      setStep('cart')
      close()
      setIsLoading({
        ...isLoading,
        paystack: false
      })
    };

    const onClose = () => {
      setIsLoading({
        ...isLoading,
        paystack: false
      })
    }

    initializePayment(onSuccess, onClose);
  };

  const checkVoucherMutation = useMutation(() => verifyVoucher(token, voucherCode), {
    onError: (error: any ) => {
      setError({
        ...error,
        voucherCode: true
      })
      setErrorMessage({
        ...errorMessage,
        voucherCode: error.response.data.errors
      })
    },
  
    onSuccess: (data: any) => {
      setVerifiedVoucher(data)
      const payload = {
        voucher_code: data.data.code,
        subscription_plan_id: cart.id
      }

      toast.success('Voucher redeemed! Making payments...')

      voucherPaymentMutation.mutate(payload)
    }
  })
  
  const voucherPaymentMutation = useMutation((data: any) => makeVoucherPayment(token, data), {
    onError: (error: any) => {
      toast.error(error.response.data.errors);
    },

    onSuccess: (data: any) => {
      let user = getCookieItem('learnbeta_user')

      user.data.student.subscription = data.data 

      setCookieItem('learnbeta_user', user) // update cookies with new data
      setUser(user)

      toast.success('Voucher payment successful');

      if (cart.subjects_allowed === -1) {
        setPaymentMethod('paystack')
        close()
      } else {
        setPaymentMethod('paystack')
        close()
        openAddSubjects()
      }
    }
  })

  return (
    <Drawer
      opened={opened}
      size="38rem"
      position='right'
      withCloseButton={true}
      padding={30}
      onClose={close}
      title={
        <Flex className="space-x-3 items-center">
          {(step === 'airtimeSummary' || step === 'paystackSummary') &&
            <UnstyledButton 
              disabled={isLoading.airtime || isLoading.paystack && true}
              onClick={() => setStep('cart')}
            >
              <Image
                alt='icon'
                src={backArrow}
                className='w-6 h-6 hover:brightness-75 transition duration-75 delay-75 ease-linear'
              />
            </UnstyledButton>
          }

          <Text className="font-semibold text-lg">
            Checkout
          </Text>
        </Flex>
      }
    >
      <Collapse
        transitionDuration={200} transitionTimingFunction="linear"
        in={step === 'cart' && true}
      >
        <Box>
          <Flex className="items-center justify-between bg-[#FAA61A] px-3 rounded-md text-white text-lg py-5">
            <Text>
              TOTAL PRICE
            </Text>

            <Text className="font-semibold">
              &#x20A6; {cart.price}
            </Text>
          </Flex>

          <Box className="mt-8">
            <Select
              size='xl'
              radius={8}
              disabled={isLoading.paystack && true || isLoading.voucher && true}
              value={billingPlan}
              placeholder='Billing Plan'
              onChange={(val) => {
                setError({
                  ...error,
                  billingPlan: false
                })
                setErrorMessage({
                  ...errorMessage,
                  billingPlan: ''
                })
                setBillingPlan(val)
              }}
              data={[
                { value: 'monthly', label: 'Monthly' },
              ]}
              label={
                <span className="font-semibold text-sm text-[#444444]">
                  Select Billing Plan
                </span>
              }
              styles={() => ({
                input: {
                  border: `${error.billingPlan ? '2px solid red' : '2px solid #E2E2E2'}`,
                  '&:focus-within': {
                    borderColor: `${error.billingPlan ? 'red' : '#FAA61A'}`,
                  },
                  color: '#555555'
                },
                item: {
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: '#FAA61A',
                      color: 'white',
                    },
                  }
                },
              })}
            />

            {error.billingPlan &&
              <Box className="mt-[0.2rem]">
                <Text className="text-red-500 text-sm">
                  {errorMessage.billingPlan}
                </Text>
              </Box>
            }
          </Box>

          <Box className="mt-8">
            <Text className="font-semibold text-sm text-[#444444]">
              Select Billing Method
            </Text>

            <Radio.Group
              value={paymentMethod}
              onChange={setPaymentMethod}
              name="paymentMethod"
              className="mt-2"
            >
              <Flex className="space-x-4 sm:space-x-6 items-center">
                <Radio
                  // disabled={isLoading.paystack && true || isLoading.voucher && true}
                  disabled
                  value="airtime"
                  color="yellow"
                  label={
                    <Box>
                      <Text className="hidden sm:block">
                        Airtime Billing
                      </Text>
                      <Text className="sm:hidden">
                        Airtime
                      </Text>
                    </Box>
                  }
                />
                <Radio
                  disabled={isLoading.paystack && true || isLoading.voucher && true}
                  value="paystack"
                  label="Paystack"
                  color="yellow"
                />
                <Radio
                  disabled={isLoading.paystack && true || isLoading.voucher && true}
                  value="voucher"
                  label="Voucher"
                  color="yellow"
                />
              </Flex>
            </Radio.Group>
          </Box>

          {paymentMethod === 'airtime' &&
            <Airtime
              setStep={setStep}
              phoneNumber={phoneNumber}
              errorMessage={errorMessage}
              isLoading={isLoading}
              setPhoneNumber={setPhoneNumber}
              setError={setError}
              error={error}
              billingPlan={billingPlan}
              setErrorMessage={setErrorMessage}
              networkProvider={networkProvider}
              setNetworkProvider={setNetworkProvider}
            />
          }

          {paymentMethod === 'paystack' &&
            <Paystack
              setStep={setStep}
              error={error}
              errorMessage={errorMessage}
              setError={setError}
              setErrorMessage={setErrorMessage}
              billingPlan={billingPlan}
            />
          }

          {paymentMethod === 'voucher' &&
            <Voucher
              error={error}
              verifiedVoucher={verifiedVoucher}
              checkVoucherMutation={checkVoucherMutation}
              voucherPaymentMutation={voucherPaymentMutation}
              setError={setError}
              voucherCode={voucherCode}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              handleVoucher={handleVoucher}
              setVoucherCode={setVoucherCode}
            />
          }
        </Box>
      </Collapse>

      <Collapse 
        transitionDuration={200} transitionTimingFunction="linear"
        in={step === 'airtimeSummary' && true}
      >
        <AirtimeSummaryCard
          isLoading={isLoading}
          handleAirtmePayment={handleAirtmePayment}
        />
      </Collapse>

      <Collapse
        transitionDuration={200} transitionTimingFunction="linear"
        in={step === 'paystackSummary' && true}
      >
        <PaystackSummaryCard
          invoice={cart}
          isLoading={isLoading}
          handlePaystack={handlePaystack}
        />
      </Collapse>
    </Drawer>
  )
}