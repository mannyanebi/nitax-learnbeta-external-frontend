import React from "react"
import { Box, Text, UnstyledButton } from "@mantine/core"
import Form from "../custom/Form"
import Input from "../custom/Input"
import TextArea from "../custom/TextArea"

export default function ContactUs (){
  return (
    <Box className="py-20 px-4 sm:px-6 lg:px-8">
      <Box className='max-w-[38rem] mx-auto'>
        <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
          Contact Us
        </Text>

        <Text className='text-center mt-6'>
          Lorem ipsum dolor sit amet consectetur. Sit enim cursus ultrices amet urna urna ut.
        </Text>
      </Box>

      <Box className="mt-8">
        <Form className="mx-auto max-w-[40rem] space-y-5">
          <Box>
            <Input
              placeholder="Enter email"
              type="email"
              className={`w-full border-[#222222] placeholder:text-[#222222] focus:outline-[#014340] border-2 px-3 py-5 rounded-sm focus:text-[#014340] transition duration-75 delay-75 ease-linear placeholder:text-sm focus:placeholder:text-[#014340]`}
            />
          </Box>

          <Box>
            <TextArea
              placeholder="How can we help?"
              className={`w-full border-[#222222] placeholder:text-[#222222] min-h-[10rem] max-h-[15rem] focus:outline-[#014340] border-2 px-3 py-5 rounded-sm focus:text-[#014340] transition duration-75 delay-75 ease-linear placeholder:text-sm focus:placeholder:text-[#014340]`}
            />
          </Box>

          <Box className="text-center !mt-10">
            <UnstyledButton 
              type='button'
              className='text-[#00433F] font-semibold bg-[#FFCB05] hover:bg-[#ffcd05c9] w-52 h-14 rounded-full text-center animate-bounce shadow-2xl transition duration-75 delay-75 ease-linear'
            >
              Send message
            </UnstyledButton>
          </Box>
        </Form>
      </Box>
    </Box>
  )
}