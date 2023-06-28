import React from "react"
import { BackgroundImage, Box, Text } from '@mantine/core'
import dynamic from 'next/dynamic';
import ReviewCard from "./carousel/ReviewCard";
import bg_play from '../../assets/svgs/bg_play.svg'
import profile from '../../assets/svgs/people_hub.svg'

const Carousel = dynamic(() => import('./carousel/Carousel'), { ssr: false });

export default function ReviewsCarousel() {
  let cards = [
    {
      key: 1,
      content: (
        <ReviewCard 
          img={profile}
          name='Nonso Ijegu'
          review='“Great platform, my kids liked it, they doing extra well in school now, I highly recommend it, trust worthy”'
        />
      )
    },
    {
      key: 2,
      content: (
        <ReviewCard
          img={profile}
          name='Mansur Bala'
          review='“Great platform, my kids liked it, they doing extra well in school now, I highly recommend it, trust worthy”'
        />
      )
    },
    {
      key: 3,
      content: (
        <ReviewCard
          img={profile}
          name='Judith Tarfar'
          review='“Great platform, my kids liked it, they doing extra well in school now, I highly recommend it, trust worthy”'
        />
      )
    }
  ]

  return (
    <BackgroundImage src={bg_play.src} className="py-10 px-4 sm:px-8 md:px-10 bg-center">
      <Box className="max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto">
        <Box className='max-w-[38rem] mx-auto'>
          <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
            Here’s what parents are saying
          </Text>

          <Text className='text-center mt-6'>
            LearnBeta has transformed lots of lives, these are the words of Student, teachers and parents.
          </Text>
        </Box>

        <Box className="flex justify-center w-full">
          <Carousel
            cards={cards}
            height="350px"
            margin="0 50"
            offset={7}
            showArrows={false}
          />
        </Box>
      </Box>
    </BackgroundImage>
  )
}