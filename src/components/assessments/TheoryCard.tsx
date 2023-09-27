import React from "react"
import { Box, Text, UnstyledButton } from "@mantine/core"
import TextArea from "../custom/TextArea"

export default function TheoryCard({
  question,
  questions,
  currentQuestionIndex,
  setAnswer,
  answer,
  showAnswer,
  questionAnswered,
  setShowAnswer
}: any) {
  return (
    <Box>
      <Box className="text-center">
        <Text className="text-[#777777] text-lg font-semibold">
          {currentQuestionIndex + 1}/{questions.data?.length}
        </Text>

        <Text className="mt-3 font-semibold text-2xl">
          {question?.question}
        </Text>
      </Box>

      <Box className="p-10 bg-[#F8F8F8] rounded-xl mt-10">
        <Text className="font-semibold">
          Your answer:
        </Text>

        <Box>
          <TextArea 
            value={answer}
            onChange={({ target }) => setAnswer(target.value)}
            className="w-full border-[#E2E2E2] focus:outline-[#FAA61A] min-h-[10rem] max-h-[30rem] font-serif text-lg border-2 px-3 py-5 rounded-sm text-[#555555] transition duration-75 delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]"
          />
        </Box>

        <Box className="space-y-2 mt-2">
          <UnstyledButton
            disabled={!questionAnswered && true}
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-2 w-32 disabled:opacity-50 text-xs h-8 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full bg-[#FAA61A] text-white"
          >
            {showAnswer ? 'Hide answer' : 'Check answer'}
          </UnstyledButton>

          {showAnswer &&
            <Box className="bg-[#FEEDD1] font-serif text-lg py-8 border-2 border-[#FAA61A] space-y-2 px-5 rounded-xl">
            <Text className="font-semibold">
              Correct answer:
            </Text>

            <Box>
              {question.answer}
            </Box>
          </Box>}
        </Box>
      </Box>
    </Box>
  )
}