import React, { useRef } from "react"
import { Box, Text } from "@mantine/core"
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import math from '../../assets/svgs/social science.svg'
import health from '../../assets/svgs/subject_icon.svg'
import social from '../../assets/svgs/health science.svg'
import SubjectAd from '@/components/landing/SubjectAd';

export default function CourseAdCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

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
  )
}