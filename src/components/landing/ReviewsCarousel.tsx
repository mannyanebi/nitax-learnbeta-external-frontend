import React from "react"
import { Box, Text } from '@mantine/core'

export default function ReviewsCarousel() {
  return (
    <Box>
      <Box className='max-w-[38rem] mt-20 mx-auto'>
        <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center'>
          Here’s what parents are saying
        </Text>

        <Text className='text-center mt-6'>
          LearnBeta has transformed lots of lives, these are the words of Student, teachers and parents.
        </Text>
      </Box>
    </Box>
  )
}