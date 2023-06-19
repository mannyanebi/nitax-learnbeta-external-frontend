import React, { useState } from "react"
import { Box, Center, Flex, Text, BackgroundImage, UnstyledButton, Skeleton } from "@mantine/core"
import Head from "next/head"
import subject_banner from '../../../../assets/svgs/subject_banner.svg'
import Link from "next/link";
import Image from "next/image";
import ProfileNav from "@/components/nav/ProfileNav"
import backArrow from '../../../../assets/svgs/backarrow_icon.svg'
import { useRouter } from 'next/router';
import preview_subject from '../../../../assets/svgs/empty_state.svg'
import LessonsCard, { LessonsCardSkeleton } from "@/components/lessons/LessonsCard";

export default function Subject (){
  const router = useRouter();
  const [selected, setSelected] = useState('') 

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard | Subject</title>
      </Head>

      <ProfileNav />


      <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4 hidden lg:block">
        <Box className="max-w-[95rem] mx-auto">
          <Box className='w-fit'>
            <Link href='/dashboard/subjects'>
              <Flex className="max-w-[97rem] mx-auto space-x-2">
                <Center className="bg-[#FEEDD1] rounded-full p-2">
                  <Image
                    priority
                    src={backArrow}
                    alt='back icon'
                    className="w-2 h-2"
                  />
                </Center>

                <Text className="font-bold">Subjects</Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* <Box className="w-full mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <Box className="max-w-[95rem] mx-auto">
          <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] rounded-2xl'>
            <Box>
              <Image
                alt='icon'
                priority
                src={preview_subject}
                className='w-[20rem] mx-auto'
              />
              <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                Snap! There was a problem somewhere
              </Text>
            </Box>
          </Center>
        </Box>
      </Box> */}

      {/* <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4">
        <Box className="max-w-[95rem] mx-auto">
          <Skeleton className="rounded-xl h-40 w-full" />
          <Skeleton className="rounded-xl h-4 w-40 mt-8" />

          <Box className="space-y-4 mt-4">
            <LessonsCardSkeleton />
            <LessonsCardSkeleton />
            <LessonsCardSkeleton />
            <LessonsCardSkeleton />

            <Flex className="justify-center">
              <Skeleton className="rounded-full h-14 w-60 mt-8" />
            </Flex>
          </Box>
        </Box>
      </Box> */}

      <Box className="mb-20">
        <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4">
          <Box className="max-w-[95rem] mx-auto">
            <BackgroundImage
              src={subject_banner.src}
              className='h-40 w-full px-6 lg:px-10 rounded-xl mt-4 text-white'
            >
              <Flex className="h-full w-full items-center">
                <Box className="w-full">
                  <Text className="font-semibold text-3xl">
                    Mathematics
                  </Text>

                  <Text className="font-semibold mt-2 truncate">
                    The study of numbers, shapes and their relationships
                  </Text>
                </Box>
              </Flex>
            </BackgroundImage>

            <Box>
              <Text className="font-bold text-lg mt-8">
                Lessons
              </Text>

              <Box className="mt-4 space-y-4">
                <LessonsCard
                  setSelected={setSelected}
                  selected={selected}
                />
                <LessonsCard
                  setSelected={setSelected}
                  selected={selected}
                />
                <LessonsCard
                  setSelected={setSelected}
                  selected={selected}
                />
                <LessonsCard
                  setSelected={setSelected}
                  selected={selected}
                />
              </Box>
            </Box>

            <Flex className="mt-8 justify-center">
              <Link
                href={`/dashboard/subjects/${router.query.subjectId}/lessons/${selected}`}
              >
                <UnstyledButton
                  disabled={!selected && true}
                  type="submit"
                  className="disabled:opacity-50 px-10 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                >
                  Start this lesson
                </UnstyledButton>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </React.Fragment>  
  )
}