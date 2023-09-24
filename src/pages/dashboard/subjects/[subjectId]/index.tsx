import React, { useState, useContext, useEffect } from "react"
import { Box, Center, Flex, Text, BackgroundImage, UnstyledButton, Skeleton } from "@mantine/core"
import { UserContext } from "@/contexts/UserContext"
import Head from "next/head"
import subject_banner from '../../../../assets/svgs/subject_banner.svg'
import Link from "next/link";
import Image from "next/image";
import ProfileNav from "@/components/nav/ProfileNav"
import backArrow from '../../../../assets/svgs/backarrow_icon.svg'
import { useRouter } from 'next/router';
import preview_subject from '../../../../assets/svgs/empty_state.svg'
import PageLayout from "@/layouts/PageLayout";
import LessonsCard, { LessonsCardSkeleton } from "@/components/lessons/LessonsCard";
import { useQuery } from "react-query"
import { getSubject } from "@/services/subjects"
import RefetchButton from "@/components/onboarding/RefetchButton"

export default function Subject() {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const router = useRouter();
  const [selected, setSelected] = useState('')
  const subjectId = router.query.subjectId ? (router.query.subjectId as string) : '';
  const subject = useQuery(['subjects', subjectId], () => getSubject(token, subjectId), {
    enabled: false, // Disable automatic fetching
  })

  useEffect(() => {
    if (subjectId) {
      subject.refetch();
    }
  }, [subjectId]);

  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Subject</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 hidden lg:block">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
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

      {subject.isLoading &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
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
        </Box>
      }

      {subject.isError &&
        <Box className="mx-auto mt-10">
          <RefetchButton
            message="Failed to fetch subject"
            retry={() => subject.refetch()}
          />
        </Box>
      }

      {subject.data &&
        <Box className="mb-20">
          <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
            <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
              <BackgroundImage
                src={subject_banner.src}
                className='h-40 w-full px-6 lg:px-10 lg:bg-right rounded-xl mt-4 text-white'
              >
                <Flex className="h-full w-full items-center">
                  <Box className="w-full">
                    <Text className="font-semibold text-3xl">
                      {subject.data.data.name}
                    </Text>

                    <Text className="font-semibold mt-2 truncate">
                      {subject.data.data.description}
                    </Text>

                    {!subject.data.data.has_access &&
                      <Text className="font-semibold mt-1 text-[#C2BC74] truncate animate-pulse">
                        🔒 This subject is not included in your current subscription.
                      </Text>
                    }
                  </Box>
                </Flex>
              </BackgroundImage>

              <Box>
                <Text className="font-bold text-lg mt-8">
                  Lessons
                </Text>

                <Box className="mt-4 space-y-4">
                  {subject.data.data.lessons.length > 0 &&
                    subject.data.data.lessons
                      .filter((lesson: any) => !lesson.is_archived) // Filter out archived lessons
                      .map((lesson: any) => (
                        <LessonsCard
                          key={lesson.id}
                          lesson={lesson}
                          setSelected={setSelected}
                          selected={selected}
                        />
                      ))
                  }

                  {subject.data.data.lessons.filter((lesson: any) => !lesson.is_archived).length < 1 &&
                    <Box className="w-full mx-auto mt-10">
                      <Box className="mx-auto">
                        <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] px-4 sm:px-8 md:px-10 rounded-2xl'>
                          <Box>
                            <Image
                              alt='icon'
                              priority
                              src={preview_subject}
                              className='w-[20rem] mx-auto'
                            />
                            <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                              No active lessons for this subject has been added
                            </Text>
                          </Box>
                        </Center>
                      </Box>
                    </Box>
                  }
                </Box>
              </Box>

              {subject.data.data.has_access &&
                subject.data.data.lessons.filter((lesson: any) => !lesson.is_archived).length > 0 && (
                  <Flex className="mt-8 justify-center">
                    <Link
                      href={`/dashboard/subjects/${router.query.subjectId}/lessons/${selected}`}
                    >
                      <UnstyledButton
                        disabled={!selected}
                        type="submit"
                        className="disabled:opacity-50 px-10 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                      >
                        Start this lesson
                      </UnstyledButton>
                    </Link>
                  </Flex>
                )
              }
            </Box>
          </Box>
        </Box>
      }
    </PageLayout>
  )
}