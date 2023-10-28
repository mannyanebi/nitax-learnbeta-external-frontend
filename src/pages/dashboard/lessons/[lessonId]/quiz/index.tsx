import React, { useEffect, useState, useContext } from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import { UserContext } from "@/contexts/UserContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Center,
  Flex,
  Text,
  UnstyledButton,
  Modal,
  Skeleton,
} from "@mantine/core";
import Link from "next/link";
import backArrow from "../../../../../assets/svgs/backarrow_icon.svg";
import preview_subject from "../../../../../assets/svgs/empty_state.svg";
import QuizCard from "@/components/assessments/QuizCard";
import ProfileNav from "@/components/nav/ProfileNav";
import { getQuizzes, submitQuizResponses } from "@/services/assessments";
import { useMutation, useQuery } from "react-query";
import RefetchButton from "@/components/onboarding/RefetchButton";
import toast, { Toaster } from "react-hot-toast";
import { Icon } from "@iconify/react";

export default function Quiz() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const token = `Bearer ${user?.data?.access_token}`;
  const lessonId = router.query.lessonId
    ? (router.query.lessonId as string)
    : "";
  const quizzes = useQuery(
    ["quizzes", Number(lessonId)],
    () => getQuizzes(token, lessonId),
    {
      enabled: false, // Disable automatic fetching
    }
  );
  const [opened, { open, close }] = useDisclosure(false);
  const [bulkAnswers, setBulkAnswers] = useState<any>([]);
  const [questions, setQuestions] = useState<any>({});
  const [answer, setAnswer] = useState<any>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessmentResult, setAssessmentResult] = useState<any>({});
  const [skipAble, setSkipAble] = useState(false);
  const currentQuestion = questions?.data?.[currentQuestionIndex];

  useEffect(() => {
    if (quizzes.isSuccess) {
      setQuestions(quizzes.data);
    }
  }, [quizzes.isSuccess, quizzes.data]);

  useEffect(() => {
    if (lessonId) {
      quizzes.refetch();
    }
  }, [lessonId, quizzes]);

  useEffect(() => {
    if (questions?.data?.length > 0) {
      const currentQuestionAnswer = bulkAnswers.find(
        (answer: any) => answer.assessment_id === currentQuestion?.id
      );

      if (currentQuestionAnswer) {
        setAnswer(currentQuestionAnswer.response);
      } else {
        setAnswer("");
      }
    }
  }, [
    bulkAnswers,
    currentQuestion?.id,
    currentQuestionIndex,
    questions?.data?.length,
  ]);

  const submitResponsesMutation = useMutation(
    (data: any) => submitQuizResponses(token, data),
    {
      onError: (error: any) => {
        setSkipAble(true);
        toast.error(error.response.data.errors);
      },

      onSuccess: (data: any) => {
        setAssessmentResult(data);
        open();
      },
    }
  );

  const handleSubmit = () => {
    const last_response_object = {
      assessment_id: currentQuestion.id,
      response: answer,
    };

    // Find the index of the last response in bulkAnswers
    const lastIndex = bulkAnswers.findIndex(
      (response: any) => response.assessment_id === currentQuestion.id
    );

    // If the last response is found, update it; otherwise, add it
    if (lastIndex !== -1) {
      bulkAnswers[lastIndex] = last_response_object;
    } else {
      bulkAnswers.push(last_response_object);
    }

    const payload = {
      lesson_id: Number(lessonId),
      responses: bulkAnswers,
    };

    submitResponsesMutation.mutate(payload);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      const response_object = {
        assessment_id: currentQuestion.id,
        response: answer,
      };

      const existingAnswerIndex = bulkAnswers.findIndex(
        (answer: any) => answer.assessment_id === response_object.assessment_id
      );

      if (existingAnswerIndex !== -1) {
        bulkAnswers[existingAnswerIndex] = response_object; // Update existing answer
      } else {
        bulkAnswers.push(response_object); // Add new answer
      }
      setAnswer("");
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
        <title>Assessment | Quiz</title>
      </Head>

      <ProfileNav />

      <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 hidden lg:block">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
          <Box className="w-fit">
            <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
              <Flex className="max-w-[97rem] mx-auto space-x-2">
                <Center className="bg-[#FEEDD1] rounded-full p-2">
                  <Image
                    priority
                    src={backArrow}
                    alt="back icon"
                    className="w-2 h-2"
                  />
                </Center>

                <Text className="font-bold">Lessons</Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>

      {quizzes.isLoading && (
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
      )}

      {quizzes.isError && (
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Box className="bg-[#FEEDD1] py-10 px-10 lg:px-20 mt-14 max-w-4xl rounded-xl mx-auto">
              <Center>
                <Box className="text-center">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                  </Box>

                  <Text className="font-semibold text-xl mt-8">
                    {(quizzes.error as any)?.response?.data?.errors}
                  </Text>

                  <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                    <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
                      <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                        Return to lessons
                      </UnstyledButton>
                    </Link>

                    <Link
                      href={`/dashboard/lessons/${router.query.lessonId}/theory`}
                    >
                      <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                        Take Theory
                      </UnstyledButton>
                    </Link>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      )}

      {quizzes.isError && (
        <Box className="mx-auto mt-10">
          <RefetchButton
            message="Failed to fetch quiz questions"
            retry={() => quizzes.refetch()}
          />
        </Box>
      )}

      {quizzes.data && quizzes.data.data.length < 1 && (
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto">
            <Box className="bg-[#FEEDD1] py-10 px-10 lg:px-20 mt-14 max-w-4xl rounded-xl mx-auto">
              <Center>
                <Box className="text-center">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                  </Box>

                  <Text className="font-semibold text-xl mt-8">
                    This lesson has no Quiz
                  </Text>

                  <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                    <Link href={`/dashboard/subjects/${router.query.lessonId}`}>
                      <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                        Return to lessons
                      </UnstyledButton>
                    </Link>

                    <Link
                      href={`/dashboard/lessons/${router.query.lessonId}/theory`}
                    >
                      <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                        Take Theory
                      </UnstyledButton>
                    </Link>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      )}

      {quizzes.data && quizzes.data.data.length > 0 && (
        <Box className="w-full px-4 sm:px-8 md:px-10 mt-4 mb-20">
          <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto ">
            <Flex className="bg-[#FEEDD1] sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
              <Text className="font-semibold text-2xl truncate">
                Assessment
              </Text>
            </Flex>

            <Box className="mt-10 max-w-[50rem] mx-auto w-full">
              <QuizCard
                answer={answer}
                setAnswer={setAnswer}
                question={currentQuestion}
                questions={questions}
                submitResponsesMutation={submitResponsesMutation}
                currentQuestionIndex={currentQuestionIndex}
              />

              <Flex className="sm:space-x-3 mt-10 flex-col space-y-3 sm:flex-row sm:space-y-0 sm:justify-end items-end w-full">
                {currentQuestionIndex > 0 && (
                  <UnstyledButton
                    type="button"
                    disabled={submitResponsesMutation.isLoading}
                    onClick={handlePrevious}
                    className="px-10 h-12 text-center disabled:opacity-50 w-60 font-bold text-[#777777] transition duration-75 delay-75 ease-linear hover:bg-[#FAA61A] rounded-full py-2 hover:text-white"
                  >
                    Previous Question
                  </UnstyledButton>
                )}

                {skipAble && (
                  <Link
                    href={`/dashboard/lessons/${router.query.lessonId}/theory`}
                  >
                    <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                      Take Theory
                    </UnstyledButton>
                  </Link>
                )}

                {currentQuestionIndex === questions?.data?.length - 1 ? (
                  <UnstyledButton
                    disabled={!answer || submitResponsesMutation.isLoading}
                    type="button"
                    onClick={handleSubmit}
                    className="px-2 w-60 h-12 text-center font-bold disabled:opacity-50 transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
                  >
                    {submitResponsesMutation.isLoading ? (
                      <Icon
                        className={`animate-spin mx-auto`}
                        icon="icomoon-free:spinner2"
                        color="#white"
                        width="20"
                        height="20"
                      />
                    ) : (
                      "Submit Assessment"
                    )}
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

              <Toaster position="bottom-right" reverseOrder={false} />
            </Box>
          </Box>

          <Modal
            opened={opened}
            onClose={close}
            fullScreen
            withCloseButton={false}
            padding={0}
            transitionProps={{ transition: "fade", duration: 200 }}
          >
            <ProfileNav />

            <Box className="w-full px-4 sm:px-8 md:px-10 mt-10 mb-20">
              <Flex className="bg-[#FEEDD1] max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto sm:items-center sm:space-x-4 flex-col sm:flex-row py-5 px-8 rounded-xl">
                <Text className="font-semibold text-2xl truncate">
                  Assessment
                </Text>

                {/* <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
                Introduction to Mathematics
              </Text> */}
              </Flex>

              <Box className="bg-[#FEEDD1] py-10 px-10 lg:px-20 mt-14 max-w-[40rem] lg:max-w-[45rem] rounded-xl mx-auto">
                <Center>
                  <Box className="text-center">
                    <Text className="font-semibold text-xl">
                      Assessment score
                    </Text>

                    <Text className="font-semibold text-4xl mt-8">
                      {assessmentResult.data?.score}%
                    </Text>

                    <Text className="text-lg mt-8">
                      Great job on completing the assessment! Use your score as
                      a stepping stone for improvement. Keep up the good work!
                    </Text>

                    <Flex className="flex-col mt-8 space-y-3 sm:space-y-0 sm:justify-center sm:space-x-3 sm:flex-row">
                      <Link
                        href={`/dashboard/subjects/${router.query.lessonId}`}
                      >
                        <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                          Return to lessons
                        </UnstyledButton>
                      </Link>

                      <Link
                        href={`/dashboard/lessons/${router.query.lessonId}/theory`}
                      >
                        <UnstyledButton className="px-4 w-52 h-12 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white">
                          Take Theory
                        </UnstyledButton>
                      </Link>
                    </Flex>
                  </Box>
                </Center>
              </Box>
            </Box>
          </Modal>
        </Box>
      )}
    </PageLayout>
  );
}
