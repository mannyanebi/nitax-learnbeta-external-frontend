import React from "react";
import { Box } from "@mantine/core";
import toast, { Toaster } from 'react-hot-toast';
import AuthLayout from "@/layouts/AuthLayout";
import SignupForm from "@/components/forms/SignupForm";
import { useForm } from '@mantine/form';
import { useMutation } from "react-query";
import { signup } from "@/services/auth";
import Head from "next/head";
import Router from "next/router";

export interface SignupData {
  name: string;
  email: string;
  phoneNumber: string;
  location: string | null;
  password: string;
}

export interface FormValuesType {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string | null;
  password: string,
  checked: boolean
}

const Signup = () => {
  const formValues: FormValuesType = {
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    password: '',
    checked: false
  }

  const form = useForm({
    initialValues: formValues,

    validate: {
      fullName: (value) => (
        !value ? 'Full name is required' : null
      ),
      email: (value) => (
        !value ? 'Email is required' :
          !/^\S+@\S+$/.test(value) ? 'Invalid email' : null
      ),
      phoneNumber: (value) => (
        !value ? 'Phonenumber is required' : null
      ),
      location: (value) => (
        !value ? 'Location is required' : null
      ),
      password: (value) => (
        !value ?
        'Password is required' :
        value.length < 8 ?
        'Password must be at least 8 characters long' :
        !/\d/.test(value) ?
        'Password must contain at least one number' :
        !/[A-Z]/.test(value) ?
        'Password must contain at least one uppercase letter' : null
      ),
      checked: (value) => (
        !value ? 'You need to agree to the terms' : null
      ),
    },
  });

  const mutation = useMutation((data: any) => signup(data), {
    onError: (error: any) => {
      form.setErrors({
        email: error.response.data.message
      })
    },

    onSuccess: (data) => {
      form.reset()
      toast.success(data.message)

      setTimeout(() => {
        Router.push('/auth/signin')
      }, 2000)      
    }
  })

  const handleSignup = async () => {
    let data: SignupData = {
      name: form.values.fullName,
      email: form.values.email,
      phoneNumber: form.values.phoneNumber,
      location: form.values.location,
      password: form.values.password
    }

    mutation.mutate(data)
  }

  return (
    <AuthLayout>
      <Head>
        <title>Signup</title>
      </Head>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />

      <Box>
        <SignupForm
          form={form}
          mutation={mutation}
          handleSignup={handleSignup}
        />
      </Box>
    </AuthLayout>
  )
}

export default Signup