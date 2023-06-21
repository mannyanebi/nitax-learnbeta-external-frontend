import React from "react";
import { Box, UnstyledButton } from "@mantine/core"
import Form from "../custom/Form"
import { UseFormReturnType } from "@mantine/form";
import Input from "../custom/Input"
import { UseMutationResult } from "react-query";
import TextArea from "../custom/TextArea"
import { ContactFormData } from '../landing/ContactUs'
import { Icon } from '@iconify/react'

interface Props {
  form: UseFormReturnType<{
    email: string;
    message: string;
  }, (values: {
    email: string;
    message: string;
  }) => {
    email: string;
    message: string;
  }>,
  mutation: UseMutationResult<any, any, any, unknown>,
  handleSubmit: (values: ContactFormData) => void;
}

const ContactUsForm: React.FC<Props> = ({
  form,
  mutation,
  handleSubmit
}) => {
  return (
    <Form 
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
      className="mx-auto max-w-[40rem] space-y-5"
    >
      <Box>
        <Input
          {...form.getInputProps('email')}
          error={form.errors.email}
          disabled={mutation.isLoading}
          placeholder="Enter email"
          type="email"
          className={`w-full border-black placeholder:text-black ${form.errors.email ? ' focus: !outline-red-500' : 'focus: !outline-[#00433F]'} border-2 px-3 py-5 rounded-sm transition duration-75 delay-75 ease-linear placeholder:text-sm`}
        />
      </Box>

      <Box>
        <TextArea
          {...form.getInputProps('message')}
          error={form.errors.message}
          disabled={mutation.isLoading}
          placeholder="How can we help?"
          className={`w-full border-black placeholder:text-black min-h-[10rem] max-h-[15rem] ${form.errors.message ? 'focus:!outline-red-500' : 'focus:!outline-[#00433F]'} border-2 px-3 py-5 rounded-sm transition duration-75 delay-75 ease-linear placeholder:text-sm`}
        />
      </Box>

      <Box className="text-center !mt-10">
        <UnstyledButton
          type='submit'
          className='text-[#00433F] font-semibold bg-[#FFCB05] hover:bg-[#ffcd05c9] w-52 h-14 rounded-full text-center animate-bounce shadow-2xl transition duration-75 delay-75 ease-linear'
        >
          {mutation.isLoading ?
            <Icon
              className={`animate-spin mx-auto`}
              icon="icomoon-free:spinner2"
              color="#00433F"
              width="20"
              height="20"
            /> :
            'Send message'
          }
        </UnstyledButton>
      </Box>
    </Form>
  )
}

export default ContactUsForm