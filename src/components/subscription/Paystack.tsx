import React from "react";
import { Icon } from "@iconify/react";
import { Box, UnstyledButton } from "@mantine/core";

interface Props {
  handlePaystack: () => void
  isLoading: {
    paystack: boolean,
    voucher?: boolean,
    airtime?: boolean
  }
}

export default function Paystack({ 
  handlePaystack, 
  isLoading 
}: Props){
  return (
    <Box className="text-center mt-[20%]">
      <UnstyledButton
        disabled={isLoading.paystack && true}
        onClick={handlePaystack}
        className="px-4 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
      >
        {isLoading.paystack ?
          <Icon
            className={`animate-spin mx-auto`}
            icon="icomoon-free:spinner2"
            color="#white"
            width="20"
            height="20"
          /> :
          'Continue'
        }
      </UnstyledButton>
    </Box>
  )
}