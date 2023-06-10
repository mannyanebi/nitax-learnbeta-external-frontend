import React from "react";
import { Box, Text, Checkbox, List, UnstyledButton, Flex } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import Form from "../custom/Form";
import Input from "../custom/Input";
import Link from "next/link";
import { UseMutationResult } from "react-query";
import { SignupData } from '../../pages/auth/signup'
import { Icon } from '@iconify/react'

interface Props {
  form: UseFormReturnType<{
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    password: string;
  }, (values: {
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    password: string;
  }) => {
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    password: string;
  }>,
  mutation: UseMutationResult<any, any, any, unknown>,
  handleSignup: (values: SignupData) => void;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>,
  checked: boolean
}

const SignupForm: React.FC<Props> = ({
  form,
  mutation,
  checked,
  setChecked,
  handleSignup
}) => {
  return (
    <Form
      onSubmit={form.onSubmit((values) => handleSignup(values))}
    >
      <Text className='text-[#777777]'>Create Account</Text>

      <Text className="mt-3 font-bold text-2xl">
        Studying is about to get fun :)
      </Text>

      <Box className="mt-8 space-y-6">
        <Box>
          <Input
            {...form.getInputProps('fullName')}
            type="text"
            error={form.errors.fullName}
            placeholder="Full name"
            disabled={mutation.isLoading}
            className={`w-full ${form.errors.fullName ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box>
          <Input
            {...form.getInputProps('email')}
            type="email"
            error={form.errors.email}
            placeholder="Email"
            disabled={mutation.isLoading}
            className={`w-full ${form.errors.email ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box>
          <Input
            {...form.getInputProps('phoneNumber')}
            type="number"
            error={form.errors.phoneNumber}
            placeholder="Phonenumber"
            disabled={mutation.isLoading}
            className={`w-full ${form.errors.phoneNumber ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box>
          <Input
            {...form.getInputProps('location')}
            type="text"
            error={form.errors.location}
            placeholder="Location"
            disabled={mutation.isLoading}
            className={`w-full ${form.errors.location ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box>
          <Input
            {...form.getInputProps('password')}
            type="password"
            error={form.errors.password}
            placeholder="Password"
            disabled={mutation.isLoading}
            className={`w-full ${form.errors.password ? 'border-red-500 focus:outline-red-500' : 'border-[#E2E2E2] focus:outline-[#FAA61A]'} border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
          />
        </Box>

        <Box>
          {form.values.password.length < 8 || !/\d/.test(form.values.password) || !/[A-Z]/.test(form.values.password) ?
            <Text className='text-[#777777] mt-5'>
              Your password must meet the specified requirements.
            </Text> : null
          }

          <List className="mt-5 list-disc" withPadding>
            {form.values.password.length < 8 &&
              <List.Item>
                <Text className='text-[#777777]'>
                  Be eight (8) characters long
                </Text>
              </List.Item>
            }

            {!/\d/.test(form.values.password) &&
              <List.Item>
                <Text className='text-[#777777]'>
                  Contain at least one number
                </Text>
              </List.Item>
            }

            {!/[A-Z]/.test(form.values.password) &&
              <List.Item>
                <Text className='text-[#777777]'>
                  Contain at least one uppercase letter
                </Text>
              </List.Item>
            }
          </List>
        </Box>

        <Box>
          <Checkbox
            size='sm'
            color="yellow"
            label="I agree to the Terms & Conditions and privacy policy"
            disabled={mutation.isLoading}
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
          />
        </Box>
      </Box>

      <Box className="space-y-4 mt-4">
        <Box className="text-center !mt-10">
          <UnstyledButton
            disabled={mutation.isLoading}
            type="submit"
            className="px-8 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
          >
            {mutation.isLoading ?
              <Icon
                className={`animate-spin mx-auto`}
                icon="icomoon-free:spinner2"
                color="#white"
                width="20"
                height="20"
              /> :
              'Create my Account'
            }
          </UnstyledButton>
        </Box>

        <Flex className="item-center justify-center !mt-10 space-x-2">
          <Text>
            Already have an Account??
          </Text>

          <Link
            href='/auth/signin'
            className="font-semibold w-fit hover:underline text-[#FAA61A]"
          >
            Signin
          </Link>
        </Flex>
      </Box>
    </Form>
  )
}

export default SignupForm