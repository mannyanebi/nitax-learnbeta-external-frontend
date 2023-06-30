import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProfileNav from "@/components/nav/ProfileNav";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import Link from "next/link";
import backArrow from '../../../../../assets/svgs/backarrow_icon.svg'
import preview_subject from '../../../../../assets/svgs/empty_state.svg'
import { useRouter } from 'next/router';
import { Box, Center, Flex, UnstyledButton, Text } from "@mantine/core";
import TheoryCard from "@/components/assessments/TheoryCard";

export default function Theory (){
  const router = useRouter();
  const [answer, setAnswer] = useState<any>('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const question = [
    {
      id: 1,
      question: 'What is the history of mathematics according to Joe Biden?',
      answer: 'The history of mathematics deals with the origin of discoveries in mathematics and the mathematical methods and notation of the past. Before the modern age and the worldwide spread of knowledge, written examples of new mathematical developments have come to light only in a few locales.'
    },
    {
      id: 2,
      question: "What is humanity's purpose on earth",
      answer: "To understand. In everything we move through each experience we encounter to become who we are meant to be. Love is the great conduit of what makes us aware of how we fit into who we choose to vibrate with. Not all vibrations work though, and that is the lesson."
    },
    {
      id: 3,
      question: 'List the continents in the world and 3 countries in each',
      answer: 'Asia has the second-highest number of countries of any continent, but exactly how many that is can be tricky to determine. The United Nations recognizes 49 countries in Asia, which is the most widely accepted number.'
    }
  ]

  const [answeredResponses, setAnsweredResponses] = useState<any>([])
  const currentQuestion = question[currentQuestionIndex];
  const questionAnswered = answeredResponses.some((answer: any) => answer.questionId === currentQuestion.id)

  const handleNext = () => {
    if (currentQuestionIndex < question.length - 1) {
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
      questionId: currentQuestion.id,
      studentAnswer: answer
    }
    // submit answerObj
    // apend response.correctAnswer to answerObj
    // like this: answerObj.correctAnswer = response.correctAnswer
    // push answerObj to answeredResponses

    answerObj.correctAnswer = `For question ${currentQuestion.id}, the answer is A`
    answeredResponses.push(answerObj);
    setAnsweredResponses([...answeredResponses]);
  }

  useEffect(() => {
    const answeredQuestion = answeredResponses.find(
      (answer: any) => answer.questionId === currentQuestion.id
    );

    if (answeredQuestion) {
      setAnswer(answeredQuestion.studentAnswer);
    } else {
      setAnswer('');
    }
  }, [currentQuestionIndex]);

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

      {/* Empty state start */}
      {/* <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto ">
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
      </Box>   */}
      {/* Empty state end */}

      <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 mb-20">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
          <Flex className="bg-[#FEEDD1] sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
            <Text className='font-semibold text-2xl truncate'>
              Assessment
            </Text>

            <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
              Introduction to Mathematics
            </Text>
          </Flex>

          <Box className="mt-10 max-w-[50rem] mx-auto w-full">
            <TheoryCard
              answer={answer}
              setAnswer={setAnswer}
              question={currentQuestion}
              questions={question}
              setShowAnswer={setShowAnswer}
              showAnswer={showAnswer}
              questionAnswered={questionAnswered}
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

              <Flex className="space-x-3">
                {questionAnswered ? (
                  <Box>
                    {currentQuestionIndex === question.length - 1 ?
                      <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
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
                    disabled={!answer && true}
                    type="button"
                    onClick={handleSubmit}
                    className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                  >
                    Submit answer
                  </UnstyledButton>
                )}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>  
   </PageLayout>   
  )
}