import React, { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Head from "next/head";
import { BackgroundImage, Box, Center, Flex, Text } from "@mantine/core";
import hero_banner from '../../assets/svgs/hero_banner.svg'
import DashboardLayout from "@/layouts/DashboardLayout";
import preview_subject from '../../assets/svgs/empty_state.svg'
import Image from "next/image";

const Overview = () => {
  const { user, setUser } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Overview</title>
      </Head>

      <BackgroundImage
        src={hero_banner.src}
        className="h-60 bg-right md:hidden text-white font-bold px-4 sm:px-8"
      >
        <Flex className="h-full items-center">
          <Box>
            <Text className="text-3xl">
              Hi, {user.data.student.name}!
            </Text>

            <Text className="mt-2">
              Welcome to your study dashboard, where you can explore a world of knowledge and unleash your full potential!
            </Text>
          </Box>
        </Flex>
      </BackgroundImage>

      <Box className="px-4 sm:px-8 md:pl-8 md:pr-14 lg:pr-20 mt-5 lg:mt-8">
        <BackgroundImage
          src={hero_banner.src}
          className="h-40 bg-right md:block hidden rounded-xl text-white font-bold px-10"
        >
          <Flex className="h-full items-center">
            <Box>
              <Text className="text-3xl">
                Hi, {user.data.student.name}!
              </Text>

              <Text className="mt-2">
                Welcome to your study dashboard, where you can explore <br className="hidden lg:block" /> a world of knowledge and unleash your full potential!
              </Text>
            </Box>
          </Flex>
        </BackgroundImage>

        <Box className="w-full mx-auto mt-10">
          <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
            <Box>
              <Image
                alt='icon'
                priority
                src={preview_subject}
                className='w-[20rem] mx-auto'
              />
              <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                Select a subject to start with on the Subjects tab
              </Text>
            </Box>
          </Center>
        </Box>

        {/* <Box>
          <Box>
            <Divider
              className="mt-5 lg:mt-8"
              my="xs"
              size='sm'
              labelProps={{
                style: {
                  fontSize: '1.125rem',
                  fontWeight: 600
                }
              }}
              label="Continue Learning"
            />
          </Box>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
            <SubjectCard free={true} />
            <SubjectCard free={true} />
            <SubjectCard free={true} />

            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
          </Box>

          <Box>
            <Divider
              className="mt-5 lg:mt-8"
              my="xs"
              size='sm'
              labelProps={{
                style: {
                  fontSize: '1.125rem',
                  fontWeight: 600
                }
              }}
              label="Other Subjects"
            />
          </Box>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
            <SubjectCard free={true} />
            <SubjectCard free={true} />
            <SubjectCard free={true} />

            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
          </Box>
        </Box> */}
      </Box>
    </DashboardLayout>
  )
}

export default Overview