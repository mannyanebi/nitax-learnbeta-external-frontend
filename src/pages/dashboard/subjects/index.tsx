import React, { useContext } from "react";
import Head from "next/head";
import SubjectCard, { SubjectCardSkeleton } from "@/components/subjects/SubjectCard";
import { UserContext } from "@/contexts/UserContext";
import { Box, Center, Divider, Text } from "@mantine/core";
import DashboardLayout from "@/layouts/DashboardLayout";
import preview_subject from '../../../assets/svgs/empty_state.svg'
import RefetchButton from '../../../components/onboarding/RefetchButton'
import Image from "next/image";
import { useQuery } from "react-query";
import { getGradeLevelSubjects } from "@/services/subjects";
import premium_icon from '../../../assets/svgs/premium.svg'

const Subjects = () => {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const gradeLevelSubjects = useQuery('gradeLevelSubjects', () => getGradeLevelSubjects(token))
  
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Subjects</title>
      </Head>

      <Box className="px-4 sm:px-8 md:pl-8 md:pr-14 lg:pr-20 mt-5 lg:mt-8">
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
            Accessible subjects
          </Text>
        </Box>

        <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
          {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length > 0 &&
            gradeLevelSubjects.data.data
              .filter((subject: any) => subject.has_access === true)
              .map((subject: any) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))
          }

          {gradeLevelSubjects.isLoading &&
            [1,2,3,4,5,6].map((num: number) => (
              <SubjectCardSkeleton key={num}/>
            ))
          }
        </Box>

        {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length > 0 &&
          gradeLevelSubjects.data.data.every((subject: any) => !subject.has_access) && (
            <Box className="w-full mx-auto">
              <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
                <Box>
                  <Image
                    alt='icon'
                    priority
                    src={preview_subject}
                    className='w-[20rem] mx-auto'
                  />
                  <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                    You do not have any accessible subjects
                  </Text>
                </Box>
              </Center>
            </Box>
          )
        }

        {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length < 1 &&
          <Box className="w-full mx-auto">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[20rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  There are no subjects in your grade yet
                </Text>
              </Box>
            </Center>
          </Box>
        }

        {gradeLevelSubjects.isError &&
          <RefetchButton
            message="Failed to fetch subjects in your grade"
            retry={() => gradeLevelSubjects.refetch()}
          />
        }

        <Box>
          <Text className="text-[#666666] font-semibold mt-6">
            Subjects in Paid Plan
          </Text>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
            {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length > 0 &&
              gradeLevelSubjects.data.data
                .filter((subject: any) => subject.has_access === false)
                .map((subject: any) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))
            }

            {gradeLevelSubjects.isLoading &&
              [1, 2, 3, 4, 5, 6].map((num: number) => (
                <SubjectCardSkeleton key={num} />
              ))
            }
          </Box>

          {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length > 0 &&
            gradeLevelSubjects.data.data.every((subject: any) => subject.has_access) && (
              <Box className="w-full mx-auto">
                <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
                  <Box>
                    <Image
                      alt='icon'
                      priority
                      src={premium_icon}
                      className='w-[20rem] mx-auto'
                    />
                    <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                      You have access to all subjects. Enjoy!
                    </Text>
                  </Box>
                </Center>
              </Box>
            )
          }

          {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length < 1 &&
            <Box className="w-full mx-auto">
              <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
                <Box>
                  <Image
                    alt='icon'
                    priority
                    src={preview_subject}
                    className='w-[20rem] mx-auto'
                  />
                  <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                    No subjects. Contact support team
                  </Text>
                </Box>
              </Center>
            </Box>
          }

          {gradeLevelSubjects.isError &&
            <RefetchButton
              message="Failed to fetch subjects in your grade"
              retry={() => gradeLevelSubjects.refetch()}
            />
          }
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default Subjects