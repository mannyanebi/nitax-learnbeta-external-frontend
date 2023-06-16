import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import PageLayout from '@/layouts/PageLayout'
import Head from 'next/head'
import { BackgroundImage, Box, Text, UnstyledButton } from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import Link from 'next/link'
import doodleBg from '../assets/svgs/doodles.svg'
import kid_hero from '../assets/svgs/kid.svg'
import purple_vc from '../assets/svgs/purple_vector.svg'
import orange_vc from '../assets/svgs/orange_vc.svg'
import HomeNav from '@/components/nav/HomeNav'
import Image from 'next/image'
import SubjectAd from '@/components/landing/SubjectAd';
import document_icon from '../assets/svgs/document_icon.svg'
import player_icon from '../assets/svgs/player_icon.svg'
import edit_icon from '../assets/svgs/edit_icon_pen.svg'

import math from '../assets/svgs/social science.svg'
import health from '../assets/svgs/subject_icon.svg'
import social from '../assets/svgs/health science.svg'

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const shadowStyle = {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.08)'
  };

  const ads = [
    {
      title: 'Mathematics',
      description: 'The study of numbers, shapes and their relationships',
      img: math
    },
    {
      title: 'Social Studies',
      description: 'The study of society and it’s interactions',
      img: health
    },
    {
      title: 'Health Science',
      description: 'The study of healthy living',
      img: social
    },
    {
      title: 'Social Studies',
      description: 'The study of society and it’s interactions',
      img: math
    },
    {
      title: 'Computer Science',
      description: 'The study of computers and information technology',
      img: health
    },
    {
      title: 'Agric Science',
      description: 'The study of crops and animals',
      img: social
    },
  ]

  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Home</title>
      </Head>

      <HomeNav />

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

      <Box>
        <Box className='mt-[-2rem] flex justify-between'>
          <Image
            alt='hero'
            priority
            className='w-[80px] xl:w-[130px] xl:h-[260px] 2xl:w-[180px] 2xl:h-[360px] h-[160px] lg:w-[100px] lg:h-[200px]'
            src={purple_vc}
          />

          <Image
            alt='hero'
            priority
            className='w-[80px] 2xl:w-[180px] 2xl:h-[360px] h-[160px] xl:w-[130px] xl:h-[260px] lg:w-[100px] lg:h-[200px] hidden sm:block'
            src={orange_vc}
          />
        </Box>

        <Box className="w-full max-w-[85rem] lg:mt-[-2rem] 2xl:mt-[-5rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFDFE]">
          <Box className='max-w-[38rem] mx-auto'>
            <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
              Get the most from LearnBeta
            </Text>

            <Text className='text-center mt-6'>
              Empowering learners to achieve their full potential through personalised and engaging educational experiences
            </Text>
          </Box>

          <Box className='mt-20'>
            <Box className='lg:space-y-0 lg:flex lg:space-x-8 space-y-16 lg:justify-center'>
              <Box style={shadowStyle} className='rounded-2xl mx-auto lg:mx-0 max-w-[19rem] py-14 text-center px-8'>
                <Image
                  alt='icon'
                  priority
                  className='w-20 mx-auto mt-[-6rem] rounded-full h-20'
                  src={document_icon}
                />

                <Text className='font-semibold text-xl text-[#00433F]'>
                  Verity of subjects
                </Text>

                <Text className='mt-2 text-[#696984] text-sm'>
                  Lorem ipsum dolor sit amet consectetur. Volutpat gravida lacus velit posuere turpis.
                </Text>
              </Box>

              <Box style={shadowStyle} className='rounded-2xl mx-auto lg:mx-0 max-w-[19rem] py-14 text-center px-8'>
                <Image
                  alt='icon'
                  priority
                  className='w-20 mx-auto mt-[-6rem] rounded-full h-20'
                  src={player_icon}
                />

                <Text className='font-semibold text-xl text-[#00433F]'>
                  Lessons and Materials
                </Text>

                <Text className='mt-2 text-[#696984] text-sm'>
                  Lorem ipsum dolor sit amet consectetur. Volutpat gravida lacus velit posuere turpis.
                </Text>
              </Box>

              <Box style={shadowStyle} className='rounded-2xl mx-auto lg:mx-0 max-w-[19rem] py-14 text-center px-8'>
                <Image
                  alt='icon'
                  priority
                  className='w-20 mx-auto mt-[-6rem] rounded-full h-20'
                  src={edit_icon}
                />

                <Text className='font-semibold text-xl text-[#00433F]'>
                  Test and Quizes
                </Text>

                <Text className='mt-2 text-[#696984] text-sm'>
                  Lorem ipsum dolor sit amet consectetur. Volutpat gravida lacus velit posuere turpis.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box className='mt-20 bg-[#E2E2F0] py-16 rounded-2xl border-2 border-[#05756E] border-dashed'>
            <Box className='px-10'>
              <Text className='font-semibold text-3xl text-[#00433F] text-left lg:text-left'>
                All the right Subjects in one place
              </Text>

              <Text className='text-left lg:text-left mt-3'>
                Get access to all the proper subjects with extensive lessons which your ward needs to be the best
              </Text>
            </Box>

            <Box className='mt-12 px-10'>
              <Carousel
                maw='100%'
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                // height={250}
                slideSize="25%"
                slideGap="md"
                loop
                withControls={false}
                plugins={[autoplay.current]}
                align="start"
                slidesToScroll={1}
              >
                {ads.map((item: any, index: number) => (
                  <Carousel.Slide key={index}>
                    <SubjectAd item={item} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  )
}
