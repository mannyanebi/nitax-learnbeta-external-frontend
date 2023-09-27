import React from "react";
import { Box, Flex, Text, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";
import { calculateFutureDate } from "@/helpers/functions/calculateFutureDate";

interface Props {
  handlePaystack: () => void,
  invoice: any,
  isLoading: {
    paystack: boolean;
    voucher: boolean;
    airtime: boolean;
  }
}

export default function PaystackSummaryCard({
  handlePaystack,
  isLoading,
  invoice
}: Props) {
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
            {invoice.name}
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Total Price
          </Text>

          <Text className="font-semibold">
            N{invoice.price}
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
            Debit Card
          </Text>
        </Flex>

        <Flex className="justify-between border-b-2 pb-2 border-[#E2E2E2]">
          <Text className="text-[#777777]">
            Plan expiry date
          </Text>

          <Text className="font-semibold">
            {calculateFutureDate(invoice.duration)}
          </Text>
        </Flex>
      </Box>

      <Box className="sm:mt-20 mt-10 text-center">
        <UnstyledButton
          disabled={isLoading.paystack}
          onClick={handlePaystack}
          className="px-4 w-72 h-14 disabled:opacity-50 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          {isLoading.paystack ?
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