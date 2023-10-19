import React from "react";
import { BackgroundImage, Box, Text, Flex } from "@mantine/core";
import Image from "next/image";
import group_icon from "../../assets/svgs/groups.svg";
import subject from "../../assets/svgs/subjects.svg";
import videos_subject from "../../assets/svgs/videos_subject.svg";
import worksheet from "../../assets/svgs/worksheet.svg";
import bg_rose from "../../assets/svgs/bg_rose.svg";
const stats_desc = `With (insert impressive number) sign-ups, we've thrilled countless
families, making learning a joyful adventure for kids while
keeping parents actively involved in their child's progress.`;

export default function OurStats() {
  return (
    <Box className="py-10 px-4 sm:px-8 md:px-10">
      <BackgroundImage
        src={bg_rose.src}
        className="max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto py-20 lg:py-32 px-4 sm:px-6 bg-no-repeat bg-cover bg-bottom lg:bg-center lg:px-20"
      >
        <Box className="lg:flex lg:items-center">
          <Box className="max-w-[38rem] lg:max-w-[20rem] xl:max-w-[28rem] lg:mx-0 mx-auto">
            <Text className="font-bold text-3xl xl:text-4xl text-[#00433F] text-center lg:text-left">
              Our Stats
            </Text>

            <Text className="text-center lg:text-left mt-6">{stats_desc}</Text>
          </Box>

          <Box className="mt-10 lg:mx-auto">
            <Flex className="justify-center flex-col items-center space-y-4 sm:mt-0 sm:space-y-0">
              <Box className="space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[39px] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  {/* <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      2k+
                    </Text>

                    <Text className="text-sm truncate">Sign ups</Text>
                  </Box>

                  <Box className="w-[20%] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box> */}

                  <Box className="md:w-[70%]">
                    <p className="font-bold text-2xl text-[#00433F]">2k+</p>

                    <p className="text-sm md:text-[11px]">Sign ups</p>
                  </Box>
                </Flex>

                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear sm:!mt-6 h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  {/* <Box className="w-[39px] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={group_icon}
                    />
                  </Box>

                  <Box className="w-[70px]">
                    <Text className="font-bold text-2xl text-[#00433F] truncate">
                      15+
                    </Text>

                    <Text className="text-sm"></Text>
                  </Box> */}

                  <Box className="w-[20%] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={subject}
                    />
                  </Box>

                  <Box className="md:w-[70%]">
                    <p className="font-bold text-2xl text-[#00433F]">15k+</p>

                    <p className="text-sm md:text-[11px]">
                      Subjects with resources
                    </p>
                  </Box>
                </Flex>
              </Box>

              <Box className="space-y-4 sm:space-y-0 sm:ml-6 sm:flex sm:space-x-6">
                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[20%] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={videos_subject}
                    />
                  </Box>

                  <Box className="md:w-[70%]">
                    <p className="font-bold text-2xl text-[#00433F]">1k+</p>

                    <p className="text-sm md:text-[11px]">
                      Worksheets and activities
                    </p>
                  </Box>
                </Flex>

                <Flex className="shadow-md w-48 lg:w-60 hover:scale-150 hover:bg-yellow-100 transition delay-75 hover:cursor-default duration-100 ease-linear sm:!mt-6 h-fit justify-center items-center space-x-5 rounded-lg bg-white p-4">
                  <Box className="w-[20%] h-[39px]">
                    <Image
                      alt="icon"
                      className="w-[39px] h-[39px]"
                      src={worksheet}
                    />
                  </Box>

                  <Box className="md:w-[70%]">
                    <p className="font-bold text-2xl text-[#00433F]">500+</p>

                    <p className="text-sm md:text-[11px]">
                      Video and Audio Lessons
                    </p>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  );
}
