import React, { useEffect, useState } from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useDisclosure } from "@mantine/hooks";
import { Box, Center, Flex, Text, UnstyledButton, Modal } from "@mantine/core";
import Link from "next/link";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import preview_subject from '../../../../../assets/svgs/empty_state.svg'
import QuizCard from "@/components/assessments/QuizCard";
import ProfileNav from "@/components/nav/ProfileNav";

export default function Quiz (){
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [bulkAnswers, setBulkAnswers] = useState<any>([])
  const [answer, setAnswer] = useState<any>('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
      id: 2,
      question: '5 + 1 = ?',
      options: {
        option_a: 12,
        option_b: 6,
        option_c: 92,
        option_d: 44,
      }
    },
    {
      id: 3,
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

      const answerObj = {
        questionId: currentQuestion.id,
        answer
      };
      const existingAnswerIndex = bulkAnswers.findIndex((answer: any) => answer.questionId === answerObj.questionId);

      if (existingAnswerIndex !== -1) {
        bulkAnswers[existingAnswerIndex] = answerObj; // Update existing answer
      } else {
        bulkAnswers.push(answerObj); // Add new answer
      }
      setAnswer('');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const answerObj = {
      questionId: currentQuestion.id,
      answer
    };
    bulkAnswers.push(answerObj); 
    // handle submit mutation
    open()
  }

  useEffect(() => {
    const currentQuestionAnswer = bulkAnswers.find((answer: any) => answer.questionId === currentQuestion.id);

    if (currentQuestionAnswer) {
      setAnswer(currentQuestionAnswer.answer);
    } else {
      setAnswer('');
    }
  }, [currentQuestionIndex]);

  return (
    <PageLayout>
      <Head>
        <title>Assessment | Quiz</title>
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

      {/* Empty state start */}
      {/* <Box className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <Box className="bg-[#FEEDD1] py-10 px-10 lg:px-20 mt-14 max-w-4xl rounded-xl mx-auto">
          <Center>
            <Box className="text-center">
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
              </Box>

              <Text className="font-semibold text-xl mt-8">
                This lesson has no Quiz
              </Text>

              <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
                  <UnstyledButton
                    className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                  >
                    Return to lessons
                  </UnstyledButton>
                </Link>

                <Link href={`/dashboard/lessons/${router.query.lessonId}/theory`}>
                  <UnstyledButton
                    className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                  >
                    Take Theory
                  </UnstyledButton>
                </Link>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Box>   */}
      {/* Empty state end */}

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
          <QuizCard 
            answer={answer}
            setAnswer={setAnswer}
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
                disabled={!answer && true}
                type="button"
                onClick={handleSubmit}
                className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                Submit Assessment
              </UnstyledButton>
            ) : (
              <UnstyledButton
                disabled={!answer && true}
                type="button"
                onClick={handleNext}
                className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                Next Question
              </UnstyledButton>
            )}
          </Flex>  
        </Box>
      </Box>  

      <Modal 
        opened={opened} 
        onClose={close}
        fullScreen
        withCloseButton={false}
        padding={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <ProfileNav />

        <Box className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-20">
          <Flex className="bg-[#FEEDD1] sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
            <Text className='font-semibold text-2xl truncate'>
              Assessment
            </Text>

            <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
              Introduction to Mathematics
            </Text>
          </Flex>

          <Box className="bg-[#FEEDD1] py-10 px-10 lg:px-20 mt-14 max-w-3xl rounded-xl mx-auto">
            <Center>
              <Box className="text-center">
                <Text className="font-semibold text-xl">
                  Assessment score
                </Text>

                <Text className="font-semibold text-4xl mt-8">
                  70%
                </Text>

                <Text className="text-lg mt-8">
                  Great job on completing the assessment! Use your score as a stepping stone for improvement. Keep up the good work!
                </Text>

                <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                  <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
                    <UnstyledButton
                      className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                    >
                      Return to lessons
                    </UnstyledButton>
                  </Link>

                  <Link href={`/dashboard/lessons/${router.query.lessonId}/theory`}>
                    <UnstyledButton
                      className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                    >
                      Take Theory
                    </UnstyledButton>
                  </Link>
                </Flex>
              </Box>
            </Center>
          </Box>
        </Box>  
      </Modal>
    </PageLayout>
  )
}