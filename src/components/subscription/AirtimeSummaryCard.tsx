import React from "react";
import { Box, Flex, Text, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

interface Props {
  handleAirtmePayment: () => void,
  isLoading: {
    paystack: boolean;
    voucher: boolean;
    airtime: boolean;
  }
}

export default function AirtimeSummaryCard ({
  handleAirtmePayment,
  isLoading
}: Props){
  return (
    <Box className="sm:mt-10 mt-5">
      <Text className="font-semibold text-center text-lg">
        Payment Summary
      </Text>

      <Box className="mt-10 space-y-8">
        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Subscription Plan
          </Text>

          <Text className="font-semibold">
            Premium Plan
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Total Price
          </Text>

          <Text className="font-semibold">
            N5,000
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Billing Plan
          </Text>

          <Text className="font-semibold">
            Monthly
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Billing Method
          </Text>

          <Text className="font-semibold">
            Airtime Billing
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Teleco Party
          </Text>

          <Text className="font-semibold">
            MTN
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Mobile Number
          </Text>

          <Text className="font-semibold">
            +234 812 7892 8332
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Plan expiry date
          </Text>

          <Text className="font-semibold">
            15th June, 2023
          </Text>
        </Flex>
      </Box>

      <Box className="sm:mt-20 mt-10 text-center">
        <UnstyledButton
          disabled={isLoading.airtime && true}
          onClick={handleAirtmePayment}
          className="px-4 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          {isLoading.airtime ?
            <Icon
              className={`animate-spin mx-auto`}
              icon="icomoon-free:spinner2"
              color="#white"
              width="20"
              height="20"
            /> :
            'Confirm'
          }
        </UnstyledButton>
      </Box>
    </Box>
  )
}