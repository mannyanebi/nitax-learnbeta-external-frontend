import React from "react";
import { Box, Divider, Flex, Text } from "@mantine/core";
import Logo from "../brand/Logo";
import Link from "next/link";
import Image from "next/image";
import twitter from "../../assets/svgs/twitter_icon.svg";
import facebook from "../../assets/svgs/facebook_icon.svg";
import linkedin_icon from "../../assets/svgs/linkedIn_icon.svg";
import instagram from "../../assets/svgs/instagram.svg";
import tiktok from "../../assets/svgs/tiktok.svg";
import snapchat from "../../assets/svgs/snapchat.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box className="bg-[#00433F]">
      <Box className="max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto px-4 sm:px-8 md:px-10 pt-10 pb-6">
        <Box className="w-full max-w-[15rem] lg:flex lg:max-w-none mx-auto space-y-6 lg:items-center lg:justify-between">
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
              <Link
                className="text-white hover:border-b-2 pb-1 font-semibold transition delay-75 duration-75 ease-linear"
                href="/policy"
              >
                Privacy Policy
              </Link>
            </Box>

            <Box>
              <Link
                className="text-white hover:border-b-2 pb-1 font-semibold transition delay-75 duration-75 ease-linear"
                href="/terms"
              >
                Terms of service
              </Link>
            </Box>

            <Box>
              <Link
                className="text-white hover:border-b-2 pb-1 font-semibold transition delay-75 duration-75 ease-linear"
                href="/faq"
              >
                FAQ
              </Link>
            </Box>
          </Box>

          <Box className="!mt-10">
            <Text className="text-white lg:text-left text-center font-semibold">
              Our socials
            </Text>

            <Flex className="space-x-5 justify-center lg:mt-2 mt-3">
              <Box>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/learnbeta_?igsh=MWVxMGhheXozaDBpZw=="
                >
                  <Image
                    alt="icon"
                    src={instagram}
                    className="h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear"
                  />
                </Link>
              </Box>
              <Box>
                <Link target="_blank" href="https://twitter.com/learnbeta_">
                  <Image
                    alt="icon"
                    src={twitter}
                    className="h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear"
                  />
                </Link>
              </Box>

              <Box>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557924677798"
                >
                  <Image
                    alt="icon"
                    src={facebook}
                    className="h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear"
                  />
                </Link>
              </Box>

              <Box>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/learnbeta/"
                >
                  <Image
                    alt="icon"
                    src={linkedin_icon}
                    className="h-[30px] w-[30px] lg:h-[24px] lg:w-[24px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear"
                  />
                </Link>
              </Box>

              <Box className="flex items-center justify-center">
                <Link target="_blank" href="https://snapchat.com/t/DtDsSo48">
                  <Image
                    alt="icon"
                    src={snapchat}
                    className="h-[22px] w-[22px] lg:h-[23px] lg:w-[23px] rounded-full hover:brightness-75 transition delay-75 duration-75 ease-linear"
                  />
                </Link>
              </Box>

              <Box className="flex items-center justify-center">
                <Link target="_blank" href="https://www.tiktok.com/@learnbeta">
                  <Image
                    alt="icon"
                    src={tiktok}
                    className="h-[26px] w-[26px] lg:h-[20px] lg:w-[20px]  hover:brightness-75 transition delay-75 duration-75 ease-linear"
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
  );
};

export default Footer;
