import React from "react";
import Image from "next/image";
import { BackgroundImage, Box, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import doodleBg from "../../assets/svgs/doodles.svg";
import kid_hero from "../../assets/svgs/kid.svg";

export default function WelcomeFace() {
  return (
    <BackgroundImage
      src={doodleBg.src}
      className="pt-8 bg-no-repeat w-full max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto px-4 sm:px-8 md:px-10 bg-cover bg-center"
    >
      <Box className="lg:flex lg:items-center lg:space-x-3">
        <Box className="lg:w-full">
          <Text className="font-bold text-4xl text-[#00433F] text-center xl:text-5xl lg:text-left">
            Empower Children with Knowledge
          </Text>

          <Text className="text-center lg:text-left mt-6">
            Welcome to LearnBeta – Where Education Meets Excitement! Our mission
            is to make learning fun and engaging for children in nursery,
            primary, and secondary school. With our interactive platform, your
            child will embark on a journey of knowledge, creativity, and
            exploration.
          </Text>

          <Box className="text-center lg:text-left mt-6 lg:mt-12">
            <Link href="/auth/signup">
              <UnstyledButton className="text-[#00433F] font-semibold bg-[#FFCB05] hover:bg-[#ffcd05c9] w-52 h-14 rounded-full text-center animate-bounce shadow-2xl transition duration-75 delay-75 ease-linear">
                Start learning!
              </UnstyledButton>
            </Link>
          </Box>
        </Box>

        <Box className="mt-6 lg:w-full">
          <Image
            alt="hero"
            priority
            className="mx-auto w-[358px] lg:mx-0 sm:w-[450px] md:w-[500px] lg:w-[800px]"
            src={kid_hero}
          />
        </Box>
      </Box>
    </BackgroundImage>
  );
}
