import React from 'react'
import PageLayout from '@/layouts/PageLayout'
import Head from 'next/head'
import { Box } from '@mantine/core'
import Footer from '@/components/landing/Footer';
import CourseAdCarousel from '@/components/landing/CoursesAdCarousel';
import FAQ from '@/components/landing/FAQ';
import ContactUs from '@/components/landing/ContactUs';
import HomeNav from '@/components/nav/HomeNav'
import ReviewsCarousel from '@/components/landing/ReviewsCarousel';
import MockupBackground from '@/components/landing/MockupBackground';
import WelcomeFace from '@/components/landing/WelcomeFace';
import ServicesSection from '@/components/landing/ServicesSection';

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Home</title>
      </Head>

      <HomeNav />

      <WelcomeFace />

      <MockupBackground />

      <Box className="w-full max-w-[85rem] lg:mt-[-2rem] 2xl:mt-[-5rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFDFE]">
        <ServicesSection />

        <CourseAdCarousel />

        <ReviewsCarousel />
      </Box>

      <FAQ />

      <ContactUs />

      <Footer />
    </PageLayout>
  )
}
