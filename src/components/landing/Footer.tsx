import React from "react";
import { Box, Divider, Flex, Text } from "@mantine/core";
import Logo from "../brand/Logo";
import Link from "next/link";
import Image from "next/image";
import twitter from '../../assets/svgs/twitter_icon.svg'
import facebook from '../../assets/svgs/facebook_icon.svg'
import linkedin from '../../assets/svgs/linkedin_icon.svg'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Box className="bg-[#00433F]">
      <Box className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <Box className='w-full max-w-[15rem] lg:flex lg:max-w-none mx-auto space-y-6 lg:items-center lg:justify-between'>
          <Box className="lg:w-[15rem]">
            <Box className="justify-center lg:justify-start flex">
              <Logo variant="white" />
            </Box>

            <Text className="text-white text-center lg:text-left text-sm">
              Empowering Children with Knowledge
            </Text>
          </Box>

          <Box className="text-center lg:space-x-28 space-y-6 lg:space-y-0 lg:flex">
            <Box>
              <Link className="text-white hover:border-b-2 pb-1 font-semibold transition delay-75 duration-75 ease-linear" href='#'>
                Privacy Policy
              </Link>
            </Box>

            <Box>
              <Link className="text-white hover:border-b-2 pb-1 font-semibold transition delay-75 duration-75 ease-linear" href='#'>
                Terms of service
              </Link>
            </Box>
          </Box>

          <Box className="!mt-10">
            <Text className="text-white lg:text-left text-center font-semibold">
              Our socials
            </Text>

            <Flex className="space-x-5 justify-center lg:mt-2 mt-3">
              <Box>
                <Link href='#'>
                  <Image
                    alt="icon"
                    src={twitter}
                    className='h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear'
                  />
                </Link>
              </Box>

              <Box>
                <Link href='#'>
                  <Image
                    alt="icon"
                    src={facebook}
                    className='h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear'
                  />
                </Link>
              </Box>

              <Box>
                <Link href='#'>
                  <Image
                    alt="icon"
                    src={linkedin}
                    className='h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear'
                  />
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Divider className="mt-7" />

        <Text className="text-center mt-4 text-white">
          &copy; {year} LearnBeta. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer