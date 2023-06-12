import React, { useState } from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Box, Center, Flex, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import AssessmentCard from "@/components/tests/AssessmentCard";
import ProfileNav from "@/components/nav/ProfileNav";

export default function Assessment (){
  const [answers, setAnswers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const question = [
    {
      id: 1,
      question: '1 + 1 = ?',
      options: {
        option_a: 2,
        option_b: 6,
        option_c: 9,
        option_d: 4,
      }
    },
    {
      id: 1,
      question: '5 + 1 = ?',
      options: {
        option_a: 12,
        option_b: 6,
        option_c: 92,
        option_d: 44,
      }
    },
    {
      id: 1,
      question: '8 + 1 = ?',
      options: {
        option_a: 34,
        option_b: 9,
        option_c: 33,
        option_d: 10,
      }
    }
  ]

  const currentQuestion = question[currentQuestionIndex]; 

  const handleNext = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <PageLayout>
      <Head>
        <title>Lesson | Assessment</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4 hidden lg:block">
        <Box className='w-fit'>
          <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
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

      <Box className="w-full px-4 sm:px-6 lg:px-8 mt-4 mb-20">
        <Flex className="bg-[#FEEDD1] sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
          <Text className='font-semibold text-2xl truncate'>
            Assessment
          </Text>

          <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
            Introduction to Mathematics
          </Text>
        </Flex>

        <Box className="mt-10 max-w-[60rem] mx-auto w-full">
          <AssessmentCard 
            question={currentQuestion}
            questions={question}
            currentQuestionIndex={currentQuestionIndex}
          />

          <Flex className="sm:space-x-3 mt-10 flex-col space-y-3 sm:flex-row sm:space-y-0 sm:justify-end items-end w-full">
            {currentQuestionIndex > 0 && (
              <UnstyledButton
                type="button"
                onClick={handlePrevious}
                className="px-10 h-12 text-center w-60 font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
              >
                Previous Question
              </UnstyledButton>
            )}

            {currentQuestionIndex === question.length - 1 ? (
              <UnstyledButton
                // disabled={mutation.isLoading}
                type="button"
                onClick={handleNext}
                className="px-2 w-60 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                Submit Assessment
              </UnstyledButton>
            ) : (
              <UnstyledButton
                // disabled={mutation.isLoading}
                type="button"
                onClick={handleNext}
                className="px-2 w-60 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                Next Question
              </UnstyledButton>
            )}
          </Flex>  
        </Box>
      </Box>  

    </PageLayout>
  )
}