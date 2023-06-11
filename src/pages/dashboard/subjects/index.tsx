import React from "react";
import Head from "next/head";
import SubjectCard, { SubjectCardSkeleton } from "@/components/subjects/SubjectCard";
import { Box, Divider, Flex, Center, Text } from "@mantine/core";
import DashboardLayout from "@/layouts/DashboardLayout";
import preview_subject from '../../assets/svgs/empty_state.svg'
import Image from "next/image";

const Subjects = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Subjects</title>
      </Head>

      <Box className="px-4 sm:px-6 lg:px-8 mt-5 lg:mt-8">
        <Box>
          <Divider
            className="mt-5 lg:mt-8"
            my="xs"
            size='sm'
            labelProps={{
              style: {
                fontSize: '1.125rem',
                fontWeight: 600
              }
            }}
            label="Subjects in your Grade"
          />

          <Text className="text-[#666666] font-semibold mt-4">
            Subjects in Free Plan
          </Text>
        </Box>

        <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 sm:gap-4 max-w-[70rem] sm:grid-cols-2 xl:grid-cols-3">
          <SubjectCard free={true} />
          <SubjectCard free={true} />
          <SubjectCard free={true} />
          <SubjectCard free={true} />
          <SubjectCard free={true} />
          <SubjectCard free={true} />

          <SubjectCardSkeleton />
          <SubjectCardSkeleton />
          <SubjectCardSkeleton />
        </Box>

        {/* <Box className="w-full mx-auto mt-10">
          <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] rounded-2xl'>
            <Box>
              <Image
                alt='icon'
                priority
                src={preview_subject}
                className='w-[20rem] mx-auto'
              />
              <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                No subjects yet
              </Text>
            </Box>
          </Center>
        </Box> */}

        <Box>
          <Text className="text-[#666666] font-semibold mt-6">
            Subjects in Paid Plan
          </Text>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 sm:gap-4 max-w-[70rem] sm:grid-cols-2 xl:grid-cols-3">
            <SubjectCard free={false} />
            <SubjectCard free={false} />
            <SubjectCard free={false} />
            <SubjectCard free={false} />
            <SubjectCard free={false} />
            <SubjectCard free={false} />

            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
            <SubjectCardSkeleton />
          </Box>

          {/* <Box className="w-full mx-auto mt-10">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  No subjects yet
                </Text>
              </Box>
            </Center>
          </Box> */}
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default Subjects