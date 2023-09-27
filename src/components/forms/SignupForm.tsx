import React from "react";
import { Box, Text, Checkbox, List, UnstyledButton, Flex, Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import Form from "../custom/Form";
import Input from "../custom/Input";
import Link from "next/link";
import { UseMutationResult } from "react-query";
import { FormValuesType } from '../../pages/auth/signup'
import { Icon } from '@iconify/react'
import { states } from "@/data/states";

interface Props {
  form: UseFormReturnType<FormValuesType, (values: FormValuesType) => FormValuesType>;
  mutation: UseMutationResult<any, any, any, unknown>,
  handleSignup: () => void;
}

const SignupForm: React.FC<Props> = ({
  form,
  mutation,
  handleSignup
}) => {
  return (
    <Form
      onSubmit={form.onSubmit(() => handleSignup())}
    >
      <Text className='text-[#777777]'>
        Create Account
      </Text>

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
          <Select
            value={form.values.location}
            disabled={mutation.isLoading}
            onChange={(val) => {
              form.setValues({
                ...form.values,
                location: val
              })
            }}
            searchable
            placeholder="Location"
            data={states.map((state: any) => ({
              label: `${state.state}, ${state.capital}`,
              value: `${state.state}, ${state.capital}`,
            }))}
            size='lg'
            styles={() => ({
              input: {
                border: form.errors.location ? '2px solid red' : '2px solid #E2E2E2',
                '&:focus-within': {
                  borderColor: form.errors.location ? 'red' : '#FAA61A',
                },
                borderRadius: '0.125rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                width: '100%',
                fontSize: '15px',
                color: "#292929",
                fontWeight: 500,
                height: '3.7rem',
                "::placeholder": {
                  color: "#555555",
                  fontWeight: 400,
                  fontSize: '15px'
                },
              },
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: '#FAA61A',
                    color: 'white',
                  },
                }
              },
            })}
            className='placeholder:text-sm mt-2'
          />

          <Box className="mt-[0.2rem]">
            {form.errors.location &&
              <label className="text-red-500 text-sm">
                {form.errors.location}
              </label>
            }
          </Box>
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
            label={
              <Text className='text-[#525252] font-[500]'>
                I agree to the <Link target='_blank' href='/#terms_of_use' className='text-[#FAA61A] hover:underline'>Terms & Conditions</Link> and <Link target='_blank' href='/#privacy_policy' className='text-[#FAA61A] hover:underline'>Privacy Policy</Link>
              </Text>
            }
            disabled={mutation.isLoading}
            checked={form.values.checked}
            onChange={() => {
              form.setValues({
                ...form.values,
                checked: !form.values.checked
              })
            }}
          />

          <Box className="mt-[0.2rem]">
            {form.errors.checked &&
              <label className="text-red-500 text-sm">
                {form.errors.checked}
              </label>
            }
          </Box>
        </Box>
      </Box>

      <Box className="space-y-4 mt-4">
        <Box className="text-center !mt-10">
          <UnstyledButton
            disabled={mutation.isLoading}
            type="submit"
            className="px-5 h-14 disabled:opacity-50 w-60 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
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