import React, { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Center, Flex, Text } from "@mantine/core";
import PageLayout from "@/layouts/PageLayout";
import ProfileNav from "@/components/nav/ProfileNav";
import backArrow from '../../assets/svgs/backarrow_icon.svg'
import Link from "next/link";
import { useMutation } from "react-query";
import OldPasswordForm from "@/components/forms/OldPasswordForm";
import NewPasswordForm from "@/components/forms/NewPasswordForm";
import { useForm } from '@mantine/form';
import { updatePassword } from "@/services/auth";
import AppLayout from "@/layouts/AppLayout";
import { useRouter } from "next/router";
import { UserContext } from "@/contexts/UserContext";
import toast, { Toaster } from "react-hot-toast";

export type OldPasswordData = { old_password: string }
export type NewPasswordData = { new_password: string }

const UpdatePassword = () => {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const router = useRouter()
  const [step, setStep] = useState('old_password')

  const oldPasswordForm = useForm({
    initialValues: {
      old_password: ''
    },

    validate: {
      old_password: (value) => (
        !value ? 'Password is required' : null
      )
    },
  });

  const newPasswordForm = useForm({
    initialValues: {
      new_password: ''
    },

    validate: {
      new_password: (value) => (
        !value ? 
        'Password is required' : 
        value.length < 8 ? 
        'Password must be at least 8 characters long' : 
        !/\d/.test(value) ? 
        'Password must contain at least one number' : 
        !/[A-Z]/.test(value) ? 
        'Password must contain at least one uppercase letter' : null
      )
    },
  });

  const newPasswordMutation = useMutation((data: any) => updatePassword(token, data), {
    onError: (error: any) => {
      setStep('old_password')
      newPasswordForm.reset()

      oldPasswordForm.setErrors({
        old_password: error.response.data.errors
      })
    },

    onSuccess: () => {
      toast.success('Successfully updated password')
      setStep('old_password')
      oldPasswordForm.reset()
      newPasswordForm.reset()
      router.push('/profile')
    }
  })

  const handleOldPassword = () => {
    setStep('new_password')
  }

  const handleNewPassword = () => {
    const payload = {
      current_password: oldPasswordForm.values.old_password,
      new_password: newPasswordForm.values.new_password,
      confirm_password: newPasswordForm.values.new_password
    }
    newPasswordMutation.mutate(payload)
  }

  return (
    <PageLayout>
      <AppLayout>
        <Head>
          <title>Profile | Update Password</title>
        </Head>

        <ProfileNav />

        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 hidden lg:block">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Box className='w-fit'>
              <Link href='/profile'>
                <Flex className="max-w-[87rem] mx-auto space-x-2">
                  <Center className="bg-[#FEEDD1] rounded-full p-2">
                    <Image
                      src={backArrow}
                      alt='back icon'
                      className="w-2 h-2"
                    />
                  </Center>

                  <Text className="font-bold">Account</Text>
                </Flex>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className="w-full px-4 sm:px-8 md:px-10 mt-14 lg:mt-24">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            {step === 'old_password' &&
              <OldPasswordForm
                oldPasswordForm={oldPasswordForm}
                handleOldPassword={handleOldPassword}
              />
            }

            {step === 'new_password' &&
              <NewPasswordForm
                setStep={setStep}
                newPasswordForm={newPasswordForm}
                newPasswordMutation={newPasswordMutation}
                handleNewPassword={handleNewPassword}
              />
            }

            <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
          </Box>
        </Box>
      </AppLayout>
    </PageLayout>
  )
}

export default UpdatePassword