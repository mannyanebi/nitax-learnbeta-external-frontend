import React from "react";
import { Box, UnstyledButton } from "@mantine/core";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<string>>,
  billingPlan: string | null,
  setErrorMessage: React.Dispatch<React.SetStateAction<{
    billingPlan: string;
    voucherCode: string;
    phoneNumber: string;
  }>>,
  error: any,
  setError: React.Dispatch<any>,
  errorMessage: {
    billingPlan: string;
    voucherCode: string;
    phoneNumber: string;
  }
}

export default function Paystack({ 
  setStep, 
  billingPlan,
  setError,
  error,
  errorMessage,
  setErrorMessage
}: Props){
  const handleContinue = () => {
    if (!billingPlan) {
      setError({
        ...error,
        billingPlan: true
      })
      setErrorMessage({
        ...errorMessage,
        billingPlan: 'Billing plan is required'
      })
    } else {
      setStep('paystackSummary')
    }
  }

  return (
    <Box className="text-center mt-[15%]">
      <UnstyledButton
        onClick={handleContinue}
        className="px-4 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
      >
        Continue
      </UnstyledButton>
    </Box>
  )
}