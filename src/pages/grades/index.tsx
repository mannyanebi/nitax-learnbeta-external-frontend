import React from "react";
import { Box, Text } from "@mantine/core";
import social from "../../assets/svgs/social science.svg";
import math from "../../assets/svgs/subject_icon.svg";
import health from "../../assets/svgs/health science.svg";
import GradesAd from "./GradesAd";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import HomeNav from "@/components/nav/HomeNav";
import Footer from "@/components/landing/Footer";
import {
  nursery,
  primary,
  juniorSecondary,
  seniorSecondary,
} from "@/constants/grades";

export default function Grades() {
  const ads = [
    {
      title: "Nursery",
      to: "#nursery",
      img: health,
      students: 50,
    },
    {
      title: "Primary",
      to: "#primary",
      img: social,
      students: 150,
    },
    {
      title: "Junior Secondary",
      to: "#junior-secondary",
      img: math,
      students: 45,
    },
    {
      title: "Senior Secondary",
      to: "#senior-secondary",
      img: social,
      students: 100,
    },
  ];

  const grades = [nursery, primary, juniorSecondary, seniorSecondary];
  return (
    <PageLayout>
      <Head>
        <title>LearnBeta | Grades</title>
      </Head>

      <HomeNav />
      <Box className="py-10 my-8  max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto px-4 sm:px-8 md:px-10 bg-[#FDFDFE] scroll-smooth">
        <Box className="max-w-[38rem] mx-auto">
          <Text className="font-bold text-3xl xl:text-4xl text-[#00433F] text-center">
            Empowering Every Student, Every Grade!
          </Text>

          <Text className="text-center mt-6 text-md font-medium">
            Discover tailored lessons crafted for students at every stage of
            their academic journey. From Nursery to Senior Secondary levels, our
            comprehensive curriculum ensures that no one is excluded
          </Text>
        </Box>

        <Box className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8 mb-12">
          {ads.map((item, index) => (
            <GradesAd item={item} key={index} />
          ))}
        </Box>

        <Box className=" h-full flex flex-col items-center">
          {grades.map((item, index) => (
            <div className="w-full mb-12" key={index} id={item.to}>
              <p className="font-bold text-2xl xl:text-3xl text-[#00433F]">
                {item.title}
              </p>
              <p className="text-[#000000] text-md font-medium mt-6 w-full md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </Box>
      </Box>
      <Footer />
    </PageLayout>
  );
}
