import React from "react";
import Input from "../custom/Input";
import { Box, Text, UnstyledButton } from "@mantine/core";

export default function Voucher() {
  return (
    <Box className="mt-8">
      <Box>
        <Text className="font-semibold text-sm text-[#444444]">
          Voucher Code
        </Text>

        <Input
          type="text"
          // error={form.errors.email}
          placeholder="Enter voucher code"
          // disabled={mutation.isLoading}
          // ${form.errors.email ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'}
          className={`w-full focus:outline-[#FAA61A] border-2 px-3 font-sans py-5 text-[#555555] transition font-sans duration-75 rounded-lg delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
        />

        <Text className="font-semibold text-right text-sm text-[#777777] mt-4">
          = ₦ 5,000
        </Text>
      </Box>

      <Box className="mt-[20%] text-center">
        <UnstyledButton
          className="px-4 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          Redeem Voucher
        </UnstyledButton>
      </Box>
    </Box>
  )
}