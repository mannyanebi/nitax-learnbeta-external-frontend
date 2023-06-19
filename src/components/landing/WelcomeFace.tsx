import React from "react"
import Image from "next/image"
import { BackgroundImage, Box, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import doodleBg from '../../assets/svgs/doodles.svg'
import kid_hero from '../../assets/svgs/kid.svg'

export default function WelcomeFace() {
  return (
    <BackgroundImage src={doodleBg.src} className='pt-8 bg-no-repeat w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-cover bg-center'>
      <Box className='lg:flex lg:items-center lg:space-x-3'>
        <Box className='lg:w-full'>
          <Text className='font-bold text-4xl text-[#00433F] text-center xl:text-5xl lg:text-left'>
            Empowering Children with knowledge
          </Text>

          <Text className='text-center lg:text-left mt-6'>
            Empowering learners to achieve their full potential through personalised and engaging educational experiences
          </Text>

          <Box className='text-center lg:text-left mt-6 lg:mt-12'>
            <Link href='/auth/signup'>
              <UnstyledButton className='text-[#00433F] font-semibold bg-[#FFCB05] hover:bg-[#ffcd05c9] w-52 h-14 rounded-full text-center animate-bounce shadow-2xl transition duration-75 delay-75 ease-linear'>
                Get Started
              </UnstyledButton>
            </Link>
          </Box>
        </Box>

        <Box className='mt-6 lg:w-full'>
          <Image
            alt='hero'
            priority
            className='mx-auto w-[358px] lg:mx-0 sm:w-[450px] md:w-[500px] lg:w-[800px]'
            src={kid_hero}
          />
        </Box>
      </Box>
    </BackgroundImage>
  )
}