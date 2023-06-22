import React from "react";
import Image from "next/image";
import { Box, Text, Radio, Flex, UnstyledButton } from "@mantine/core";
import mtn_logo from '../../assets/svgs/mtn.svg'
import airtel_logo from '../../assets/svgs/airtel.svg'
import Input from "../custom/Input";

interface Props {
  networkProvider: string,
  setNetworkProvider: React.Dispatch<React.SetStateAction<string>>,
  phoneNumber: string | number,
  errorMessage: {
    billingPlan: string;
    voucherCode: string;
    phoneNumber: string;
  },
  isLoading: {
    paystack: boolean;
    voucher: boolean;
    airtime: boolean;
  },
  billingPlan: string | null,
  setPhoneNumber: React.Dispatch<React.SetStateAction<string | number>>,
  setError: React.Dispatch<any>,
  error: any,
  setErrorMessage: React.Dispatch<React.SetStateAction<{
    billingPlan: string;
    voucherCode: string;
    phoneNumber: string;
  }>>,
  setStep: React.Dispatch<React.SetStateAction<string>>
}

export default function Airtime({ 
  networkProvider,
  setNetworkProvider,
  phoneNumber,
  errorMessage,
  isLoading,
  setPhoneNumber,
  setError,
  error,
  setErrorMessage,
  billingPlan,
  setStep
}: Props){  
  const previewSummary = () => {
    if (!billingPlan) {
      setError({
        ...error,
        billingPlan: true
      })
      setErrorMessage({
        ...errorMessage,
        billingPlan: 'Billing plan is required'
      })
    } else if (!phoneNumber) {
      setError({
        ...error,
        phoneNumber: true
      })
      setErrorMessage({
        ...errorMessage,
        phoneNumber: 'Phonenumber is required'
      })
    } else {
      setStep('airtimeSummary')
    }
  }

  return (
    <Box className="mt-8">
      <Box>
        <Text className="font-semibold text-sm text-[#444444]">
          Select Network
        </Text>

        <Radio.Group
          value={networkProvider}
          onChange={setNetworkProvider}
          name="networkProvider"
          className="mt-2 space-y-2"

        >
          <Flex className={`justify-between bg-[#F5F5F5] border-2 hover:border-[#FAA61A] transition duration-75 delay-75 ease-linear px-5 py-2 rounded-lg items-center ${networkProvider === 'mtn' ? 'border-[#FAA61A]' : 'border-transparent'}`}>
            <Flex className="items-center space-x-3">
              <Image
                alt='icon'
                src={mtn_logo}
                className='w-[45px] h-[45px] rounded-lg'
              />

              <Text className="font-semibold">
                MTN
              </Text>
            </Flex>

            <Radio
              value="mtn"
              color="yellow"
            />
          </Flex>

          <Flex className={`justify-between bg-[#F5F5F5] border-2 hover:border-red-500 transition duration-75 delay-75 ease-linear px-5 py-2 rounded-lg items-center ${networkProvider === 'airtel' ? 'border-red-500' : 'border-transparent'}`}>
            <Flex className="items-center space-x-3">
              <Image
                alt='icon'
                src={airtel_logo}
                className='w-[45px] h-[45px] rounded-lg'
              />

              <Text className="font-semibold">
                Airtel
              </Text>
            </Flex>

            <Radio
              value="airtel"
              color="red"
            />
          </Flex>
        </Radio.Group>
      </Box>

      <Box className="mt-8">
        <Text className="font-semibold text-sm text-[#444444]">
          Mobile Number
        </Text>

        <Input
          type="number"
          value={phoneNumber}
          error={errorMessage.phoneNumber}
          disabled={isLoading.airtime && true}
          placeholder="Enter mobile number"
          onChange={({ target }) => {
            setPhoneNumber(target.value)
            setError({
              ...error,
              phoneNumber: false
            })
            setErrorMessage({
              ...errorMessage,
              phoneNumber: ''
            })
          }}
          className={`w-full ${error.phoneNumber ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 font-sans py-5 text-[#555555] transition duration-75 rounded-lg delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
        />
      </Box>

      <Box className="mt-[15%] text-center">
        <UnstyledButton
          onClick={previewSummary}
          className="px-4 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          Continue
        </UnstyledButton>
      </Box>
    </Box>
  )
}