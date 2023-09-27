import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import ProfileNav from "@/components/nav/ProfileNav";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import { UserContext } from "@/contexts/UserContext"
import preview_subject from '../../../../../assets/svgs/empty_state.svg'
import { useRouter } from 'next/router';
import { Box, Center, Flex, UnstyledButton, Text, Skeleton } from "@mantine/core";
import TheoryCard from "@/components/assessments/TheoryCard";
import { useMutation, useQuery } from "react-query";
import { getTheoryAssessments, submitTheoryResponse } from "@/services/assessments";
import toast, { Toaster } from "react-hot-toast";
import { Icon } from "@iconify/react";
import RefetchButton from "@/components/onboarding/RefetchButton";

export default function Theory (){
  const router = useRouter();
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const lessonId = router.query.lessonId ? (router.query.lessonId as string) : '';
  const [questions, setQuestions] = useState<any>({})
  const [skipAble, setSkipAble] = useState(false)
  const theoryAssessments = useQuery(['theoryAssessments', Number(lessonId)], () => getTheoryAssessments(token, lessonId), {
    enabled: false, // Disable automatic fetching
  })
  const [answer, setAnswer] = useState<any>('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredResponses, setAnsweredResponses] = useState<any>([])
  const currentQuestion = questions.data?.[currentQuestionIndex];
  const questionAnswered = answeredResponses.some((answer: any) => answer.assessment_id === currentQuestion.id)

  useEffect(() => {
    if (lessonId) {
      theoryAssessments.refetch();
    }
  }, [lessonId]);

  useEffect(() => {
    if (theoryAssessments.isSuccess) {
      setQuestions(theoryAssessments.data)
    }
  }, [theoryAssessments.isSuccess, theoryAssessments.data])

  useEffect(() => {
    const answeredQuestion = answeredResponses.find(
      (answer: any) => answer.assessment_id === currentQuestion.id
    );

    if (answeredQuestion) {
      setAnswer(answeredQuestion.response);
    } else {
      setAnswer('');
    }
  }, [currentQuestionIndex]);

  const submitResponsesMutation = useMutation((data: any) => submitTheoryResponse(token, data), {
    onError: (error: any) => {
      handleNext()
      setSkipAble(true)
      toast.error(error.response.data.errors);
    },

    onSuccess: (data: any) => {
      let answerObj: any = {
        assessment_id: currentQuestion.id,
        response: data.data.response
      }

      answeredResponses.push(answerObj);
      setAnsweredResponses([...answeredResponses]);

      toast.success('Submitted');
    }
  })

  const handleNext = () => {
    if (currentQuestionIndex < questions.data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer('');
      setShowAnswer(false)
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false)
    }
  };

  const handleSubmit = () => {
    let answerObj: any = {
      lesson_id: Number(lessonId),
      assessment_id: currentQuestion.id,
      response: answer
    }

    submitResponsesMutation.mutate(answerObj)
  }

  return (
    <PageLayout>
      <Head>
        <title>Assessment | Theory</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 hidden lg:block">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto ">
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
      </Box>

      {theoryAssessments.isLoading &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-10">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto ">
            <Skeleton className="h-14 rounded-xl" />

            <Skeleton className="h-6 mt-10 w-14 mx-auto rounded-xl" />

            <Box className="max-w-[50rem] mx-auto">
              <Skeleton className="h-[20rem] mt-10" />

              <Flex className="justify-end">
                <Skeleton className="h-12 rounded-full mt-10 w-40" />
              </Flex>
            </Box>
          </Box>
        </Box>
      }

      {theoryAssessments.isError &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
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
                    {(theoryAssessments.error as any)?.response?.data?.errors}
                  </Text>

                  <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                    <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
                      <UnstyledButton
                        className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                      >
                        Return to lessons
                      </UnstyledButton>
                    </Link>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      }

      {theoryAssessments.isError &&
        <Box className="mx-auto mt-10">
          <RefetchButton
            message="Failed to fetch quiz questions"
            retry={() => theoryAssessments.refetch()}
          />
        </Box>
      }

      {theoryAssessments.data &&
        theoryAssessments.data.data.length < 1 &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
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
                    This lesson has no Theory
                  </Text>

                  <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                    <Link href={`/dashboard/subjects`}>
                      <UnstyledButton
                        className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
                      >
                        Return to lessons
                      </UnstyledButton>
                    </Link>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      } 

      {theoryAssessments.data && theoryAssessments.data.data.length > 0 &&
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Flex className="bg-[#FEEDD1] sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
              <Text className='font-semibold text-2xl truncate'>
                Assessment
              </Text>
            </Flex>

            <Box className="mt-10 max-w-[50rem] mx-auto w-full">
              <TheoryCard
                answer={answer}
                setAnswer={setAnswer}
                question={currentQuestion}
                questions={questions}
                setShowAnswer={setShowAnswer}
                showAnswer={showAnswer}
                questionAnswered={questionAnswered}
                currentQuestionIndex={currentQuestionIndex}
              />

              <Toaster
                position="bottom-right"
                reverseOrder={false}
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

                {skipAble &&
                  <Link href={`/dashboard/subjects`}>
                    <UnstyledButton
                      type="button"
                      className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                    >
                      Back to lessons
                    </UnstyledButton>
                  </Link>
                }

                <Flex className="space-x-3">
                  {questionAnswered ? (
                    <Box>
                      {currentQuestionIndex === questions.data.length - 1 ?
                        <Link href={`/dashboard/subjects`}>
                          <UnstyledButton
                            type="button"
                            className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                          >
                            Back to lessons
                          </UnstyledButton>
                        </Link> :

                        <UnstyledButton
                          type="button"
                          onClick={handleNext}
                          className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                        >
                          Next Question
                        </UnstyledButton>
                      }
                    </Box>
                  ) : (
                    <UnstyledButton
                      disabled={!answer || submitResponsesMutation.isLoading}
                      type="button"
                      onClick={handleSubmit}
                      className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                    >
                      {submitResponsesMutation.isLoading ?
                        <Icon
                          className={`animate-spin mx-auto`}
                          icon="icomoon-free:spinner2"
                          color="#white"
                          width="20"
                          height="20"
                        /> :
                        'Submit answer'
                      }
                    </UnstyledButton>
                  )}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>  
      }
   </PageLayout>   
  )
}