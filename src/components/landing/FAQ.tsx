import React, { useState } from "react"
import { BackgroundImage, Box, Text, Flex, UnstyledButton, Collapse, Divider } from "@mantine/core"
import { Icon } from '@iconify/react';
import bg_hero from '../../assets/svgs/bg_yellow.svg'
import bg_light_blue from '../../assets/svgs/bg_light_blue.svg'

export default function FAQ() {
  const [faq, setFaq] = useState({
    first: false,
    second: false,
    third: false
  })

  return (
    <BackgroundImage src={bg_hero.src} className="py-10 px-4 sm:px-8 bg-no-repeat bg-cover bg-left lg:bg-top md:px-10">
      <BackgroundImage src={bg_light_blue.src} className="max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto py-20 lg:py-32 px-4 sm:px-6 bg-no-repeat bg-cover bg-left lg:bg-center lg:px-8">
        <Flex className="flex-col lg:flex-row lg:justify-between lg:space-x-20 items-start">
          <Box className='max-w-[38rem] lg:max-w-[20rem] mx-auto lg:mx-0'>
            <Text className='font-bold text-3xl xl:text-3xl text-[#00433F] text-center lg:text-2xl lg:text-left'>
              Frequently Asked Questions
            </Text>

            <Text className='text-center lg:text-sm lg:mt-4 lg:text-left mt-6'>
              We know you may have some questions
            </Text>
          </Box>

          <Box className="mt-10 lg:mt-0 w-full max-w-[48rem] space-y-4">
            <Box className={`px-5 py-4 ${faq.first ? 'bg-[#5D5EC7] text-white' : 'bg-[#E5F7FC]'} transition duration-75 ease-linear border-2 rounded-md border-black`}>
              <Flex className="justify-between items-center">
                <Text className="font-semibold">
                  What is LearnBeta?
                </Text>

                <Box>
                  <UnstyledButton
                    onClick={() => {
                      setFaq((prevState) => ({ ...prevState, first: !prevState.first }))
                    }}
                  >
                    <Icon
                      className={`${faq.first && 'rotate-45'} transition duration-75 ease-linear delay-75`}
                      icon="majesticons:plus"
                      color={`${faq.first ? 'white' : 'black'}`}
                      width="24"
                      height="24"
                    />
                  </UnstyledButton>
                </Box>
              </Flex>

              <Collapse className="mt-4" in={faq.first}>
                <Divider />

                <Text className="mt-4">
                  To get started, click the get started button and create an account. After this, sign into you account and then get access to all the amazing things LearnBeta has to offer
                </Text>
              </Collapse>
            </Box>

            <Box className={`px-5 py-4 ${faq.second ? 'bg-[#5D5EC7] text-white' : 'bg-[#E5F7FC]'} transition duration-75 ease-linear border-2 rounded-md border-black`}>
              <Flex className="justify-between items-center">
                <Text className="font-semibold">
                  How do i get started?
                </Text>

                <Box>
                  <UnstyledButton
                    onClick={() => {
                      setFaq((prevState) => ({ ...prevState, second: !prevState.second }))
                    }}
                  >
                    <Icon
                      className={`${faq.second && 'rotate-45'} transition duration-75 ease-linear delay-75`}
                      icon="majesticons:plus"
                      color={`${faq.second ? 'white' : 'black'}`}
                      width="24"
                      height="24"
                    />
                  </UnstyledButton>
                </Box>
              </Flex>

              <Collapse className="mt-4" in={faq.second}>
                <Divider />

                <Text className="mt-4">
                  To get started, click the get started button and create an account. After this, sign into you account and then get access to all the amazing things LearnBeta has to offer
                </Text>
              </Collapse>
            </Box>

            <Box className={`px-5 py-4 ${faq.third ? 'bg-[#5D5EC7] text-white' : 'bg-[#E5F7FC]'} transition duration-75 ease-linear border-2 rounded-md border-black`}>
              <Flex className="justify-between items-center">
                <Text className="font-semibold">
                  Do i need to pay for all the courses separately?
                </Text>

                <Box>
                  <UnstyledButton
                    onClick={() => {
                      setFaq((prevState) => ({ ...prevState, third: !prevState.third }))
                    }}
                  >
                    <Icon
                      className={`${faq.third && 'rotate-45'} transition duration-75 ease-linear delay-75`}
                      icon="majesticons:plus"
                      color={`${faq.third ? 'white' : 'black'}`}
                      width="24"
                      height="24"
                    />
                  </UnstyledButton>
                </Box>
              </Flex>

              <Collapse className="mt-4" in={faq.third}>
                <Divider />

                <Text className="mt-4">
                  To get started, click the get started button and create an account. After this, sign into you account and then get access to all the amazing things LearnBeta has to offer
                </Text>
              </Collapse>
            </Box>
          </Box>
        </Flex>
      </BackgroundImage>
    </BackgroundImage>
  )
}