import React, { useState } from "react"
import { Box, Drawer, Text, Flex, Radio, Select } from "@mantine/core"
import Paystack from "./Paystack";
import Voucher from "./Voucher";
import Airtime from "./Airtime";

export default function CheckoutDrawer({
  opened,
  close,
  cart
}: any) {
  const [paymentMethod, setPaymentMethod] = useState('airtime');
  const [networkProvider, setNetworkProvider] = useState('mtn');
  const [billingPlan, setBillingPlan] = useState<string | null>(null);
  const [voucherCode, setVoucherCode] = useState('')
  const [error, setError] = useState<any>({
    billingPlan: false,
    voucherCode: false,
  })
  const [errorMessage, setErrorMessage] = useState({
    billingPlan: '',
    voucherCode: '',
  })
  const [isLoading, setIsLoading] = useState({
    paystack: false,
    voucher: false,
    airtime: false
  })

  const handlePaystack = () => {
    if (!billingPlan){
      setError({
        ...error,
        billingPlan: true
      })
      setErrorMessage({
        ...errorMessage,
        billingPlan: 'Billing plan is required'
      })
    }else{
      setIsLoading({
        ...isLoading,
        paystack: true
      })

      // handle payment
      // onSuccess, toast success
      // onError, toast error
    }
  }

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
      setIsLoading({
        ...isLoading,
        voucher: true
      })

      // handle tx
      // onSuccess, toast success
      // onError, toast error
    }
  }

  return (
    <Drawer
      opened={opened}
      size="40rem"
      position='right'
      withCloseButton={true}
      padding={30}
      onClose={close}
      title={
        <Text className="font-semibold text-lg">
          Checkout
        </Text>
      }
    >
      <Box>
        <Flex className="items-center justify-between bg-[#FAA61A] px-3 rounded-md text-white text-lg py-5">
          <Text>
            TOTAL PRICE
          </Text>

          <Text className="font-semibold">
            ₦ 5,000
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
                disabled={isLoading.paystack && true || isLoading.voucher && true}
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
            networkProvider={networkProvider}
            setNetworkProvider={setNetworkProvider}
          />
        }

        {paymentMethod === 'paystack' &&
          <Paystack 
            isLoading={isLoading}
            handlePaystack={handlePaystack}
          />
        }

        {paymentMethod === 'voucher' &&
          <Voucher 
            error={error}
            setError={setError}
            isLoading={isLoading}
            voucherCode={voucherCode}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            handleVoucher={handleVoucher}
            setVoucherCode={setVoucherCode}
          />
        }
      </Box>
    </Drawer>
  )
}