import React from "react";
import { Box, Text, UnstyledButton, PinInput, Flex } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import Form from "../custom/Form";
import { OTPData } from '../../pages/auth/forgot_password'

interface Props {
  otpForm: UseFormReturnType<{
    code: string;
  }, (values: {
    code: string;
  }) => {
    code: string;
  }>,
  handleOTP: (values: OTPData) => void,
}

const OTPForm: React.FC<Props> = ({
  otpForm,
  handleOTP,
}) => {
  return (
    <Form
      onSubmit={otpForm.onSubmit((values) => handleOTP(values))}
    >
      <Text className="mt-3 font-bold text-center text-2xl">
        OTP Sent to Mail
      </Text>

      <Text className='text-[#777777] text-center mt-5'>
        A six (6) digit OTP code has been sent to your email address. Please enter the OTP to continue      
      </Text>

      <Box className="mt-8 space-y-4">
        <Flex className='justify-center'>
          <PinInput 
            mask 
            size='lg'
            styles={(theme) => ({
              input: {
                '&:focus-within': {
                  borderColor: '#FAA61A',
                },
                borderColor: '#E2E2E2'
              },
            })}
            {...otpForm.getInputProps('code')}
            length={6}
          />
        </Flex>

        {otpForm.errors.code  &&
          <Text className="text-red-500 text-sm text-center">
            {otpForm.errors.code}
          </Text>
        }
      </Box>

      <Box className="mt-10 text-center">
        <UnstyledButton
          type="submit"
          className="px-4 w-40 h-14 text-center font-bold transition disabled:opacity-50 duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          Continue
        </UnstyledButton>
      </Box>
    </Form>
  )
}

export default OTPForm