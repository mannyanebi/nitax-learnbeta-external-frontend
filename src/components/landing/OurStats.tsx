import React from "react"
import { BackgroundImage, Box, Text, Flex } from "@mantine/core"
import Image from "next/image";
import group_icon from '../../assets/svgs/groups.svg'
import bg_rose from '../../assets/svgs/bg_rose.svg'

export default function OurStats() {
  return (
    <Box className="py-10 px-4 sm:px-6 lg:px-8">
      <BackgroundImage src={bg_rose.src} className="max-w-[85rem] mx-auto py-20 lg:py-32 px-4 sm:px-6 bg-no-repeat bg-cover bg-bottom lg:bg-center lg:px-20">
        <Box className="lg:flex lg:items-center">
          <Box className='max-w-[38rem] lg:max-w-[20rem] xl:max-w-[28rem] lg:mx-0 mx-auto'>
            <Text className='font-bold text-3xl xl:text-4xl text-[#00433F] text-center lg:text-left'>
              Our Stats
            </Text>

            <Text className='text-center lg:text-left mt-6'>
              Lorem ipsum dolor sit amet consectetur. Amet elit congue amet nisi elit porttitor commodo.
            </Text>
          </Box>

          <Box className="mt-10 lg:mx-auto">
            <Flex className="justify-center flex-col items-center space-y-4 sm:mt-0 sm:space-y-0">
              <Box className="space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[39px] h-[39px]">
                    <Image
                      alt='icon'
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      2k+
                    </Text>

                    <Text className='text-sm truncate'>
                      Sign upshgvjbknlmnkjghgfhvjbkjn
                    </Text>
                  </Box>
                </Flex>

                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear sm:!mt-6 h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[39px] h-[39px]">
                    <Image
                      alt='icon'
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      2k+
                    </Text>

                    <Text className='text-sm truncate'>
                      Sign upshgvjbknlmnkjghgfhvjbkjn
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box className="space-y-4 sm:space-y-0 sm:ml-6 sm:flex sm:space-x-6">
                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[39px] h-[39px]">
                    <Image
                      alt='icon'
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      2k+
                    </Text>

                    <Text className='text-sm truncate'>
                      Sign upshgvjbknlmnkjghgfhvjbkjn
                    </Text>
                  </Box>
                </Flex>

                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear sm:!mt-6 h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[39px] h-[39px]">
                    <Image
                      alt='icon'
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      2k+
                    </Text>

                    <Text className='text-sm truncate'>
                      Sign upshgvjbknlmnkjghgfhvjbkjn
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  )
}