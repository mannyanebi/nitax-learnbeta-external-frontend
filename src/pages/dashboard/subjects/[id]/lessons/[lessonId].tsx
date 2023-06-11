import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ProfileNav from "@/components/nav/ProfileNav";
import { Box, Center, Flex, Text, Timeline, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import PageLayout from "@/layouts/PageLayout";
import { useRouter } from 'next/router';
import LessonTranscript from "@/components/lessons/LessonTranscript";

export default function Lesson() {
  const router = useRouter();
  const lesson = {
    topics: [
      {
        id: 1,
        completed: true,
        name: 'Introduction to Mathematics',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too. Mathematics is like a puzzle.When you put the right pieces together in the right way, you can solve a problem and find the answer.It is a lot of fun to figure out how things work and to solve puzzles.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      },
      {
        id: 2,
        completed: true,
        name: 'What are numbers?',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      },
      {
        id: 3,
        completed: false,
        name: 'Examples of functions in Javascript',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      },
      {
        id: 4,
        completed: false,
        name: 'Hooks in mordern day React',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      },
      {
        id: 5,
        completed: false,
        name: 'Basic mathematical vocabulary',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      },
      {
        id: 6,
        completed: false,
        name: 'Why is mathematics Important ?',
        link: 'https://www.youtube.com/embed/Dorf8i6lCuk',
        transcript: "Mathematics is a subject that helps us understand numbers, shapes, and patterns. It helps us solve problems and figure things out in the world around us. You already know a lot about mathematics! For example, when you count objects or money, you are using math. When you draw shapes or build structures with blocks, you are using math too.You can use math to solve puzzles in real life too! For example, you can use math to figure out how much change you will get when you buy something at the store or how much time it will take you to get to a place. Mathematics is an important subject that helps us understand the world and solve problems in our daily lives.It is also a subject that can be enjoyed for its beauty and creativity.With practice and patience, you can become a great mathematician too!"
      }
    ]
  }
  const [lessonFinished, setLessonFinished] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(() => {
    const firstIncompleteTopic = lesson.topics.find(topic => !topic.completed);
    return firstIncompleteTopic || lesson.topics[0];
  });

  useEffect(() => {
    const currentIndex = lesson.topics.findIndex(topic => topic.id === currentTopic.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex === lesson.topics.length) {
      setLessonFinished(true);
    }
  }, [currentTopic, lesson.topics]);

  const handleNext = () => {
    const currentIndex = lesson.topics.findIndex(topic => topic.id === currentTopic.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex < lesson.topics.length) {
      setCurrentTopic(lesson.topics[nextIndex]);
    }
  };

  const handlePrevious = () => {
    setLessonFinished(false)
    const currentIndex = lesson.topics.findIndex(topic => topic.id === currentTopic.id);
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      setCurrentTopic(lesson.topics[previousIndex]);
    }
  };

  return (
    <PageLayout>
      <Head>
        <title>Dashboard | Lesson</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4 hidden lg:block">
        <Box className='w-fit'>
          <Link href={`/dashboard/subjects/${router.query.id}`}>
            <Flex className="max-w-[97rem] mx-auto space-x-2">
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

      <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4">
        <Flex className="bg-[#FEEDD1] sm:items-center sm:justify-between flex-col sm:flex-row py-5 px-8 rounded-xl">
          <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
            Introduction to Mathematics
          </Text>

          <Text className='font-semibold truncate'>
            0% Completed
          </Text>
        </Flex>

        <Box className="mt-10">
          <Box className="fixed overflow-y-auto w-[25%] h-[100vh] hidden lg:block pb-[20rem] no-scrollbar space-y-6">
            <Timeline 
              active={4} 
              bulletSize={21} 
              lineWidth={2}
              color="yellow"
            >
              {lesson.topics.map((topic) => (
                <Timeline.Item key={topic.id}>
                  <Text className="text-sm font-semibold text-[#666666]">
                    {topic.name}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Box>

          <Box className="lg:ml-[28%] mb-20">
            <LessonTranscript 
              topic={currentTopic}
            />

            <Flex className="mt-10 justify-end">
              {lessonFinished ? 
                <Flex className="space-x-3">
                  {currentTopic.id !== lesson.topics[0].id && (
                    <UnstyledButton
                      type="button"
                      onClick={handlePrevious}
                      className="px-10 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                    >
                      Go Back
                    </UnstyledButton>
                  )}

                  <Link href='#skip_assessment'>
                    <UnstyledButton
                      // disabled={mutation.isLoading}
                      type="button"
                      onClick={handleNext}
                      className="px-10 h-12 text-center font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
                    >
                      Skip Assessment
                    </UnstyledButton>
                  </Link>

                  <Link href='#assessment'>
                    <UnstyledButton
                      // disabled={mutation.isLoading}
                      type="button"
                      onClick={handleNext}
                      className="px-10 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                    >
                      Take Assessment
                    </UnstyledButton>
                  </Link>
                </Flex> :

                <Flex className="space-x-3">
                  {currentTopic.id !== lesson.topics[0].id && (
                    <UnstyledButton
                      type="button"
                      onClick={handlePrevious}
                      className="px-10 h-12 text-center font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
                    >
                      Previous Topic
                    </UnstyledButton>
                  )}

                  <UnstyledButton
                    // disabled={mutation.isLoading}
                    type="button"
                    onClick={handleNext}
                    className="px-2 w-40 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                  >
                    Next Topic
                  </UnstyledButton>
                </Flex>  
              }
            </Flex>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  )
}