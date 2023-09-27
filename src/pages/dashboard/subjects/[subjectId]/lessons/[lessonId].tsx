import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { UserContext } from '@/contexts/UserContext';
import ProfileNav from "@/components/nav/ProfileNav";
import { Box, Center, Flex, Skeleton, Text, Timeline, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import preview_subject from '../../../../../assets/svgs/empty_state.svg'
import PageLayout from "@/layouts/PageLayout";
import { useRouter } from 'next/router';
import LessonTranscript from "@/components/lessons/LessonTranscript";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getLesson } from "@/services/lessons";
import RefetchButton from "@/components/onboarding/RefetchButton";
import { markTopicAsComplete } from "@/services/topics";
import toast, { Toaster } from "react-hot-toast";

export default function Lesson() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const [lesson, setLesson] = useState<any>({})
  const lessonId = router.query.lessonId ? (router.query.lessonId as string) : '';
  const currentLesson = useQuery(['lessons', lessonId], () => getLesson(token, lessonId), {
    enabled: false, // Disable automatic fetching
  })
  const [lessonFinished, setLessonFinished] = useState(false);
  const [currentTopic, setCurrentTopic] = useState<any>(null);
  const completedCount = lesson.data?.topics.reduce((count: any, topic: any) => {
    if (topic.completed) {
      return count + 1;
    }
    return count;
  }, 0);
  const percentageCompleted = (completedCount / lesson.data?.topics.length) * 100;

  useEffect(() => {
    if (lessonId) {
      currentLesson.refetch();
    }
  }, [lessonId]);

  useEffect(() => {
    if (currentLesson.isSuccess) {
      setLesson(currentLesson.data);
    }
  }, [currentLesson.isSuccess, currentLesson.data]);

  useEffect(() => {
    if (currentLesson.isSuccess) {
      // Assuming you want to set the first incomplete topic or the first topic if none are incomplete
      const firstIncompleteTopic = currentLesson.data.data.topics.find((topic: any) => !topic.completed);
      const newCurrentTopic = firstIncompleteTopic || currentLesson.data.data.topics[0];

      setCurrentTopic(newCurrentTopic);
    }
  }, [currentLesson.isSuccess, currentLesson.data]);

  useEffect(() => {
    const currentIndex = lesson?.data?.topics.findIndex((topic: any) => topic.id === currentTopic.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex === lesson.data?.topics.length) {
      setLessonFinished(true);
    }
  }, [currentTopic, lesson.data?.topics]);

  useEffect(() => {
    if (lessonFinished && !currentTopic?.completed) {
      completeTopicMutation.mutate(currentTopic?.id.toString());
      // Mark the last topic as completed in the lesson object
      setLesson((prevLesson: any) => ({
        ...prevLesson,
        data: {
          ...prevLesson.data,
          topics: prevLesson.data.topics.map((topic: any) =>
            topic.id === currentTopic?.id ? { ...topic, completed: true } : topic
          ),
        },
      }));
    }
  }, [lessonFinished]);

  const handleNext = async () => {
    const currentIndex = lesson.data.topics.findIndex((topic: any) => topic.id === currentTopic.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex < lesson.data.topics.length) {
      // Check if the current topic is completed
      if (!currentTopic.completed) {
        // Mark the current topic as completed using the mutation
        completeTopicMutation.mutate(currentTopic.id.toString());

        // Update the lesson object to mark the current topic as completed
        const updatedTopics = [...lesson.data.topics];
        updatedTopics[currentIndex] = { ...currentTopic, completed: true };

        // Update the lesson state
        setLesson((prevLesson: any) => ({
          ...prevLesson,
          data: {
            ...prevLesson.data,
            topics: updatedTopics,
          },
        }));
      }
      setCurrentTopic(lesson.data.topics[nextIndex]);
    }
  };

  const handlePrevious = () => {
    setLessonFinished(false)
    const currentIndex = lesson.data.topics.findIndex((topic: any) => topic.id === currentTopic.id);
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      setCurrentTopic(lesson.data.topics[previousIndex]);
    }
  };

  const completeTopicMutation = useMutation((topidId: string) => markTopicAsComplete(topidId, token), {
    onError: () => {
      toast.error(`Failed to mark ${currentTopic.title} as completed. Please try again later.`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(['lessons', lessonId]);
    }
  })

  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Lesson</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
          <Box className='w-fit'>
            <Link href={`/dashboard/subjects/${router.query.subjectId}`}>
              <Flex className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto space-x-2">
                <Center className="bg-[#FEEDD1] rounded-full p-2">
                  <Image
                    priority
                    src={backArrow}
                    alt='back icon'
                    className="w-2 h-2"
                  />
                </Center>

                <Text className="font-bold">Lessons</Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>

      {currentLesson.isLoading &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Skeleton className="h-16" />

            <Box className="mt-8 lg:flex lg:space-x-4">
              <Box className="w-[30%] hidden lg:block space-y-6">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
              </Box>

              <Box className="w-full">
                <Box className='lg:pl-5'>
                  <Skeleton className="h-[15rem]" />

                  <Box className="mt-5 space-y-4">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      }

      {currentLesson.isError &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  {(currentLesson.error as any)?.response?.data?.errors}
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>
      }

      {currentLesson.isError &&
        <Box className="mx-auto mt-10">
          <RefetchButton
            message="Failed to fetch lesson"
            retry={() => currentLesson.refetch()}
          />
        </Box>
      }

      {currentLesson.data && lesson.data?.topics.length > 0 &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Flex className="bg-[#FEEDD1] sm:items-center sm:justify-between flex-col sm:flex-row py-5 px-8 rounded-xl">
              <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
                {lesson.data.title}
              </Text>

              <Text className='font-semibold truncate'>
                {percentageCompleted.toFixed(0)}% Completed
              </Text>
            </Flex>

            <Box className="mt-10">
              <Box className="fixed overflow-y-auto w-[25%] h-[100vh] hidden lg:block pb-[20rem] no-scrollbar space-y-6">
                <Timeline
                  active={lesson.data.topics.filter((topic: any) => topic.completed).length}
                  bulletSize={21}
                  lineWidth={2}
                  color="yellow"
                >
                  {lesson.data.topics.map((topic: any) => (
                    <Timeline.Item key={topic.id}>
                      <Text className="text-sm font-semibold text-[#666666]">
                        {topic.title}
                      </Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Box>

              <Box className="lg:ml-[30%] mb-20">
                <Box className='lg:pl-5'>
                  <LessonTranscript
                    topic={currentTopic}
                  />
                </Box>

                <Flex className="mt-10 justify-end">
                  {lessonFinished ?
                    <Flex className="lg:space-x-3 space-y-3 lg:space-y-0 lg:flex-row flex-col">
                      {currentTopic.id !== lesson.data.topics[0].id && (
                        <UnstyledButton
                          type="button"
                          onClick={handlePrevious}
                          className="px-4 w-60 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                        >
                          Go Back
                        </UnstyledButton>
                      )}

                      <Link href={`/dashboard/subjects/${router.query.subjectId}`}>
                        <UnstyledButton
                          type="button"
                          onClick={handleNext}
                          className="px-4 w-60 h-12 text-center font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
                        >
                          Skip Assessment
                        </UnstyledButton>
                      </Link>

                      <Link href={`/dashboard/lessons/${router.query.lessonId}/quiz`}>
                        <UnstyledButton
                          type="button"
                          onClick={handleNext}
                          className="px-4 w-60 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                        >
                          Take Assessment
                        </UnstyledButton>
                      </Link>
                    </Flex> :

                    <Flex className="sm:space-x-3 flex-col space-y-3 sm:flex-row sm:space-y-0">
                      {currentTopic.id !== lesson.data.topics[0].id && (
                        <UnstyledButton
                          type="button"
                          onClick={handlePrevious}
                          className="px-10 h-12 text-center w-60 font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
                        >
                          Previous Topic
                        </UnstyledButton>
                      )}

                      <UnstyledButton
                        type="button"
                        onClick={handleNext}
                        className="px-2 w-60 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                      >
                        Next Topic
                      </UnstyledButton>
                    </Flex>
                  }

                  <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      }

      {currentLesson.data && lesson.data?.topics.length < 1 &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  There are no topics for this lesson yet
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>
      }
    </PageLayout>
  )
}