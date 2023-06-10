import React, { useState } from "react";
import { Box } from "@mantine/core";
import toast, { Toaster } from 'react-hot-toast';
import AuthLayout from "@/layouts/AuthLayout";
import SignupForm from "@/components/forms/SignupForm";
import { useForm } from '@mantine/form';
import { useMutation } from "react-query";
import { signin } from "@/services/auth";
import Head from "next/head";
import Router from "next/router";

export interface SignupData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  password: string;
}

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const form = useForm({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
      password: ''
    },

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
    },
  });

  const mutation = useMutation((data: any) => signin(data), {
    onError: (error: any) => {
      form.setErrors({
        email: error.response.data.message
      })
    },

    onSuccess: (data) => {
      
    }
  })

  const handleSignup = async (values: SignupData) => {
    mutation.mutate(values)
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
          checked={checked}
          setChecked={setChecked}
          handleSignup={handleSignup}
        />
      </Box>
    </AuthLayout>
  )
}

export default Signup