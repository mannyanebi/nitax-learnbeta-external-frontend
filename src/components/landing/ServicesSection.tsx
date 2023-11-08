import React from "react";
import { Box, Text } from "@mantine/core";
import document_icon from "../../assets/svgs/document_icon.svg";
import Image from "next/image";
import player_icon from "../../assets/svgs/player_icon.svg";
import edit_icon from "../../assets/svgs/edit_icon_pen.svg";
import { about } from "@/constants/about";

export default function ServicesSection() {
  const shadowStyle = {
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.08)",
  };

  return (
    <Box className="py-10">
      {/* <div className="w-full mb-8" id="about_us">
        <p className="font-bold text-3xl xl:text-4xl text-[#00433F] text-center">
          {about.title}
        </p>
        <p className="text-[#000000] text-[14px] mt-6 w-full md:text-left text-center">
          {about.description}
        </p>
      </div> */}

      <Box className="max-w-[38rem] mx-auto">
        <Text className="font-bold text-3xl xl:text-4xl text-[#00433F] text-center">
          Get the most from Learnbeta
        </Text>

        <Text className="text-center mt-6">
          Choose LearnBeta because we believe that every child has the potential
          to excel. Our platform fosters creativity, critical thinking, and a
          love for learning.
        </Text>
      </Box>

      <Box className="mt-20">
        <Box className="lg:space-y-0 lg:flex lg:space-x-8 space-y-16 lg:justify-center">
          <Box
            style={shadowStyle}
            className="rounded-2xl mx-auto lg:mx-0 max-w-[18rem] py-14 text-center px-6"
          >
            <Image
              alt="icon"
              priority
              className="w-20 mx-auto mt-[-6rem] rounded-full h-20"
              src={document_icon}
            />

            <Text className="font-semibold text-xl text-[#00433F]">
              Variety of subjects
            </Text>

            <Text className="mt-2 text-[#696984] text-sm">
              Explore the variety of academia in one place from the arts to
              sciences. Unlock diverse learning opportunities with our range of
              online lessons. Our team of passionate educators ensures that
              every lesson is a step toward success.
            </Text>
          </Box>

          <Box
            style={shadowStyle}
            className="rounded-2xl mx-auto lg:mx-0 max-w-[18rem] py-14 text-center px-6"
          >
            <Image
              alt="icon"
              priority
              className="w-20 mx-auto mt-[-6rem] rounded-full h-20"
              src={player_icon}
            />

            <Text className="font-semibold text-xl text-[#00433F]">
              Lessons and Materials
            </Text>

            <Text className="mt-2 text-[#696984] text-sm">
              Access carefully curated multi-sensory online assignments,
              interactive assessments and mock exams for Nursery to Secondary
              classes following the Nigerian Curriculum
            </Text>
          </Box>

          <Box
            style={shadowStyle}
            className="rounded-2xl mx-auto lg:mx-0 max-w-[18rem] py-14 text-center px-6"
          >
            <Image
              alt="icon"
              priority
              className="w-20 mx-auto mt-[-6rem] rounded-full h-20"
              src={edit_icon}
            />

            <Text className="font-semibold text-xl text-[#00433F]">
              Test and Quizes
            </Text>

            <Text className="mt-2 text-[#696984] text-sm">
              Access mock tests and quizzes to prep your ward for the academic
              year. All tests and quizzes for various subjects are grouped by
              academic school year.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
