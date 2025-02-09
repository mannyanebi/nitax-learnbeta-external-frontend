import React from "react";
import Input from "../custom/Input";
import { Box, Text, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

interface Props {
  error: {
    billingPlan?: boolean;
    voucherCode: boolean;
  },
  errorMessage: {
    billingPlan?: string;
    voucherCode: string;
  },
  voucherCode: string,
  setError: any,
  setErrorMessage: any
  setVoucherCode: React.Dispatch<React.SetStateAction<string>>,
  handleVoucher: () => void;
  checkVoucherMutation: any;
  verifiedVoucher: any;
  voucherPaymentMutation: any
}

export default function Voucher({
  error,
  setError,
  errorMessage,
  voucherCode,
  setVoucherCode,
  handleVoucher,
  checkVoucherMutation,
  voucherPaymentMutation,
  setErrorMessage,
  verifiedVoucher
}: Props) {
  return (
    <Box className="mt-8">
      <Box>
        <Text className="font-semibold text-sm text-[#444444]">
          Voucher Code
        </Text>

        <Input
          type="text"
          value={voucherCode}
          onChange={({ target }) => {
            setVoucherCode(target.value)
            setError({
              ...error,
              voucherCode: false
            })
            setErrorMessage({
              ...errorMessage,
              voucherCode: ''
            })
          }}
          error={errorMessage.voucherCode}
          placeholder="Enter voucher code"
          disabled={checkVoucherMutation.isLoading || voucherPaymentMutation.isLoading}
          className={`w-full ${error.voucherCode ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 text-[#555555] transition font-sans duration-75 rounded-lg delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
        />
        
        {verifiedVoucher &&
          <Text className="font-semibold text-right text-sm text-[#777777] mt-4">
            = &#x20A6; {verifiedVoucher.data.value}
          </Text>
        }
      </Box>

      <Box className="mt-[15%] text-center">
        <UnstyledButton
          onClick={handleVoucher}
          disabled={checkVoucherMutation.isLoading || voucherPaymentMutation.isLoading}
          className="px-4 w-72 h-14 text-center font-bold transition duration-75 disabled:opacity-50 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          {checkVoucherMutation.isLoading || voucherPaymentMutation.isLoading ?
            <Icon
              className={`animate-spin mx-auto`}
              icon="icomoon-free:spinner2"
              color="#white"
              width="20"
              height="20"
            /> :
            'Redeem Voucher'
          }
        </UnstyledButton>
      </Box>
    </Box>
  )
}