import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Center, Text, BackgroundImage } from "@mantine/core";
import bgImage from '../assets/svgs/bg_objects.svg'
import preview_subject from '../assets/svgs/empty_state.svg'
import PageLayout from "@/layouts/PageLayout";
import HomeNav from "@/components/nav/HomeNav";
import Footer from "@/components/landing/Footer";

const ServiceTerms = () => {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Service Terms</title>
      </Head>

      <HomeNav />

      <BackgroundImage src={bgImage.src} className="py-20 px-4 sm:px-6 bg-no-repeat bg-cover bg-center lg:px-8">
        <Box className="mx-auto max-w-[50rem]">
          <Box className="w-full mx-auto mt-10">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  Service Terms Page comming soon...
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>
      </BackgroundImage>

      <Footer />
    </PageLayout>
  )
}

export default ServiceTerms