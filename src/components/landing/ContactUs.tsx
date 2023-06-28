import React from "react"
import { Box, Text, BackgroundImage } from "@mantine/core"
import bgImage from '../../assets/svgs/contact_us_bg.svg'
import ContactUsForm from "../forms/ContactUsForm"
import { useForm } from '@mantine/form';
import { useMutation } from "react-query";
import toast, { Toaster } from 'react-hot-toast';
import { sendMessage } from "@/services/user";

export interface ContactFormData {
  email: string;
  message: string;
}

export default function ContactUs (){
  const form = useForm({
    initialValues: {
      email: '',
      message: ''
    },

    validate: {
      email: (value) => (
        !value ? 'Email is required' :
          !/^\S+@\S+$/.test(value) ? 'Invalid email' : null
      ),
      message: (value) => (
        !value ? 'Message is required' : null
      )
    },
  });

  const mutation = useMutation((data: any) => sendMessage(data), {
    onError: () => {
      toast.error('Failed to send message! Try again')
    },

    onSuccess: () => {
      toast.success('Message sent! We will be in touch soon.')
    },
  })

  const handleSubmit = async (values: ContactFormData) => {
    mutation.mutate(values)
  }

  return (
    <BackgroundImage src={bgImage.src} className="pt-10 lg:pt-20 pb-20 px-4 sm:px-8 bg-no-repeat bg-cover bg-left lg:bg-center md:px-10">
      <Box className='max-w-[38rem] mx-auto'>
        <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
          Contact Us
        </Text>

        <Text className='text-center mt-6'>
          Lorem ipsum dolor sit amet consectetur. Sit enim cursus ultrices amet urna urna ut.
        </Text>
      </Box>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />

      <Box className="mt-8">
        <ContactUsForm 
          form={form}
          mutation={mutation}
          handleSubmit={handleSubmit}
        />
      </Box>
    </BackgroundImage>
  )
}