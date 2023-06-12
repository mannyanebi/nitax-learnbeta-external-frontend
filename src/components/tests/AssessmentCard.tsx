import React from "react"
import { Box, Text, Radio } from "@mantine/core"

const OptionCard = ({ option, answer }: any) => {
  return (
    <Box className={`border-2 transition duration-75 delay-75 ease-linear ${answer === option ? 'border-[#FAA61A]' : 'border-[#E2E2E2]'} hover:border-[#FAA61A] p-4`}>
      <Radio
        value={option}
        color="yellow"
        label={
          <Text className="text-[#555555] font-semibold">
            {option}
          </Text>
        }
      />
    </Box>
  )
}

export default function AssessmentCard({ question, questions, currentQuestionIndex }: any){
  return (
    <Box>
      <Box className="text-center">
        <Text className="text-[#777777] text-lg font-semibold">
          {currentQuestionIndex + 1}/{questions.length}
        </Text>

        <Text className="mt-3  font-semibold text-2xl">
          {question.question}
        </Text>
      </Box>

      <Box className="p-10 bg-[#F8F8F8] rounded-xl mt-10">
        <Radio.Group
          // onChange={setGrade}
          // value={grade}
          name="answer"
          className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-10 space-y-5 sm:space-y-0 sm:gap-5 max-w-[70rem] mx-auto"
        >
          <OptionCard 
            option={question.options.option_a}
          />
          <OptionCard
            option={question.options.option_b}
          />
          <OptionCard
            option={question.options.option_b}
          />
          <OptionCard
            option={question.options.option_d}
          />
        </Radio.Group>
      </Box>
    </Box>
  )
}