import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Head from "next/head";
import { Box } from "@mantine/core";
import Footer from "@/components/landing/Footer";
import CourseAdCarousel from "@/components/landing/CoursesAdCarousel";
import FAQ from "@/components/landing/FAQ";
import ContactUs from "@/components/landing/ContactUs";
import HomeNav from "@/components/nav/HomeNav";
import ReviewsCarousel from "@/components/landing/ReviewsCarousel";
import MockupBackground from "@/components/landing/MockupBackground";
import WelcomeFace from "@/components/landing/WelcomeFace";
import ServicesSection from "@/components/landing/ServicesSection";
import GetStarted from "@/components/landing/GetStarted";
import OurStats from "@/components/landing/OurStats";
import { about } from "@/constants/about";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Home</title>
      </Head>

      <HomeNav />

      {/* <MockupBackground /> */}

      <Box className="w-full h-[80vh] max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] lg:mt-[-2rem] 2xl:mt-[-5rem] mx-auto px-4 sm:px-8 md:px-10 bg-[#FDFDFE]">
        <Box className="py-10 px-14 h-full flex items-center">
          <div className="w-full mb-8">
            <p className="font-bold text-3xl xl:text-4xl text-[#00433F] text-center">
              {about.title}
            </p>
            <p className="text-[#000000] text-[14px] mt-6 w-full md:text-left text-center">
              {about.description}
            </p>
          </div>
        </Box>
      </Box>

      <Footer />
    </PageLayout>
  );
}
