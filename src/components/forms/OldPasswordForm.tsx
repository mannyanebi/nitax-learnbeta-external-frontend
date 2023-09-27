import React from "react";
import { Box, Text, UnstyledButton } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import Form from "../custom/Form";
import Input from "../custom/Input";
import { OldPasswordData } from "@/pages/profile/update_password";

interface Props {
  oldPasswordForm: UseFormReturnType<{
    old_password: string;
  }, (values: {
    old_password: string;
  }) => {
      old_password: string;
  }>,
  handleOldPassword: (values: OldPasswordData) => void;
}

const OldPasswordForm: React.FC<Props> = ({
  oldPasswordForm,
  handleOldPassword
}) => {
  return (
    <Form
      className="w-full max-w-sm mx-auto"
      onSubmit={oldPasswordForm.onSubmit((values) => handleOldPassword(values))}
    >
      <Text className="mt-3 font-bold text-center text-2xl">
        Enter Current Password
      </Text>

      <Box className="mt-8 space-y-6">
        <Box>
          <Input
            {...oldPasswordForm.getInputProps('old_password')}
            type="password"
            error={oldPasswordForm.errors.old_password}
            placeholder="Password"
            className={`w-full ${oldPasswordForm.errors.old_password ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box className="space-y-4 mt-4 lg:!mt-28">
          <Box className="text-center mt-6">
            <UnstyledButton
              type="submit"
              className="px-4 w-40 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
            >
              Continue
            </UnstyledButton>
          </Box>
        </Box> 
      </Box>
    </Form>
  )
}

export default OldPasswordForm