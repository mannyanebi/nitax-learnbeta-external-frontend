import React, { useState } from "react"
import { BackgroundImage, Flex, UnstyledButton, Text, Box } from "@mantine/core"
import Link from "next/link"
import bgImage from '../../assets/svgs/bg_objects.svg'

const SubscribeCard = ({ plan, price, description }: any) => {
  const colors = [
    'red',
    'yellow',
    'green',
    'blue',
    'purple',
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const color = getRandomColor()
  return (
    <Box className='w-full border-2 max-w-[14rem] bg-white rounded-3xl border-[#E2E2E2] p-6 text-center space-y-5'>
      <Text className={`text-${color}-500 font-semibold text-lg`}>
        {plan}
      </Text>

      <Text className="font-bold text-[#666666] text-2xl">
        #{price}
      </Text>

      <Box className={`h-3 w-3 bg-${color}-500 rounded-full mx-auto`} />

      <Text
        className="text-[#666666]"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {description}
      </Text>

      <Box className="hidden">
        <Box className="bg-red-500 text-red-500  hover:bg-red-500" />
        <Box className="bg-red-100" />
        <Box className="bg-yellow-500 text-yellow-500  hover:bg-yellow-500" />
        <Box className="bg-yellow-100" />
        <Box className="bg-green-500 text-green-500  hover:bg-green-500" />
        <Box className="bg-green-100" />
        <Box className="bg-blue-500 text-blue-500  hover:bg-blue-500" />
        <Box className="bg-blue-100" />
        <Box className="bg-purple-500 text-purple-500  hover:bg-purple-500" />
        <Box className="bg-purple-100" />
      </Box>

      <Box>
        <Link href='/auth/signup'>
          <UnstyledButton className={`w-full text-center text-${color}-500 py-2 bg-${color}-100  hover:bg-${color}-500 rounded-full font-semibold hover:text-white hover:bg-${color}-400 transition duration-75 delay-75 ease-linear`}>
            Get started
          </UnstyledButton>
        </Link>
      </Box>
    </Box>
  )
}

export default function GetStarted() {
  return (
    <BackgroundImage src={bgImage.src} className="py-20 px-4 sm:px-6 bg-no-repeat bg-cover bg-center lg:px-8">
      <Box className='max-w-[38rem] mx-auto'>
        <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
          Get started today
        </Text>

        <Text className='text-center mt-6'>
          Subscribe to the plan that fits your needs and give your child access to cutting-edge eduction today
        </Text>
      </Box>

      <Flex className='flex-col items-center space-y-5 sm:space-y-0 mt-14 sm:flex-row justify-center sm:space-x-8'>
        <SubscribeCard 
          plan='Premium Plan'
          price='5,000'
          description='Access to all subjects and their lessons'
        />

        <SubscribeCard
          plan='Handy Plan'
          price='2,000'
          description='Access to just one subjects and its lessons'
        />
      </Flex>
    </BackgroundImage>
  )
}