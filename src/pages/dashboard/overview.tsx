import React, { useEffect, useState } from "react";
import Head from "next/head";
import { BackgroundImage, Box, Skeleton, UnstyledButton, Radio, Center, Divider, Flex, Text, Modal } from "@mantine/core";
import SubjectCard, { SubjectCardSkeleton } from "@/components/subjects/SubjectCard";
import Link from "next/link";
import { useDisclosure } from '@mantine/hooks';
import hero_banner from '../../assets/svgs/hero_banner.svg'
import DashboardLayout from "@/layouts/DashboardLayout";
import preview_subject from '../../assets/svgs/empty_state.svg'
import Image from "next/image";
import Logo from "@/components/brand/Logo";

const GradeCheckCardSkeleton = () => {
  return (
    <Flex className={`border-2 space-x-2 items-center border-[#E2E2E2] p-4`}>
      <Skeleton className="h-5 w-5 rounded-full" />
      <Skeleton className="h-3 w-40 rounded-full" />
    </Flex>
  )
}

const GradeCheckCard = ({ item, grade }: any) => {
  return (
    <Box className={`border-2 transition duration-75 delay-75 ease-linear ${grade === item.value ? 'border-[#FAA61A]' : 'border-[#E2E2E2]'} hover:border-[#FAA61A] p-4`}>
      <Radio 
        value={item.value} 
        color="yellow" 
        label={
          <Text className="text-[#555555] font-semibold">
            {item.label}
          </Text>
        } 
      />
    </Box>
  )
}

const Overview = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [grade, setGrade] = useState('');

  useEffect(() => {
    open()
  }, [])

  const grades = [
    {
      value: 'primary1',
      label: 'Primary 1'
    },
    {
      value: 'primary2',
      label: 'Primary 2'
    },
    {
      value: 'primary3',
      label: 'Primary 3'
    },
    {
      value: 'primary4',
      label: 'Primary 4'
    },
    {
      value: 'primary5',
      label: 'Primary 5'
    },
    {
      value: 'primary6',
      label: 'Primary 6'
    },

    {
      value: 'jss1',
      label: 'JSS 1'
    },
    {
      value: 'jss2',
      label: 'JSS 2'
    },
    {
      value: 'jss3',
      label: 'JSS 3'
    },
    {
      value: 'sss1',
      label: 'SSS 1'
    },
    {
      value: 'sss2',
      label: 'SSS 2'
    },
    {
      value: 'sss3',
      label: 'SSS 3'
    },
  ]

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Overview</title>
      </Head>

      <BackgroundImage
        src={hero_banner.src}
        className="h-44 bg-right md:hidden text-white font-bold px-4 sm:px-8"
      >
        <Flex className="h-full items-center">
          <Box>
            <Text className="text-3xl">
              Hi, Emeka!
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
                Hi, Emeka!
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

      <Modal 
        padding={0}
        opened={opened} 
        onClose={close}
        withCloseButton={false}
        fullScreen
      >
        <Box className="px-4 sm:px-8 md:px-10">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Flex className="justify-end">
              <Link href='/'>
                <Logo />
              </Link>
            </Flex>

            <Box className="text-center lg:my-20 my-10">
              <Text className="font-semibold text-2xl lg:text-3xl">
                Welcome to LearnBeta
              </Text>

              <Text className="lg:text-lg mt-3">
                You are almost there, select your grade to get started
              </Text>

              <Radio.Group
                onChange={setGrade}
                value={grade}
                name="grade"
                className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-10 space-y-5 sm:space-y-0 sm:gap-5 max-w-[55rem] xl:max-w-[60rem] 2xl:max-w-[70rem] mx-auto"
              >
                {grades.map((item) => (
                  <GradeCheckCard
                    grade={grade}
                    key={item.value}
                    item={item}
                  />
                ))}

                {/* {[1,2,3,4,5,6].map((radio, i) => (
              <GradeCheckCardSkeleton key={i} />
            ))} */}
              </Radio.Group>
            </Box>

            <Box className="mt-10 text-center">
              {/* <UnstyledButton
            disabled={mutation.isLoading}
            type="submit"
            className="px-4 w-60 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
          >
            {mutation.isLoading ?
              <Icon
                className={`animate-spin mx-auto`}
                icon="icomoon-free:spinner2"
                color="#white"
                width="20"
                height="20"
              /> :
              'Continue'
            }
          </UnstyledButton> */}

              <UnstyledButton
                onClick={close}
                className="px-4 w-60 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                Continue
              </UnstyledButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </DashboardLayout>
  )
}

export default Overview