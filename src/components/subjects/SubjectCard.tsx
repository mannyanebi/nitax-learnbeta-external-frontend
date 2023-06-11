import React from 'react';
import { Box, Flex, Text, Skeleton, Progress, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import lock_icon from '../../assets/svgs/lock.svg'
import subjectIcon from '../../assets/svgs/subject_icon.svg'
import Link from 'next/link';

export const SubjectCardSkeleton = () => {
  return (
    <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[18.5rem] flex flex-col">
      <Skeleton className='w-full h-[127px] rounded-xl' />
      <Skeleton className='h-4 w-40 mt-3' />
      <Skeleton className='h-3 w-full mt-3' />
      <Flex className="mt-auto justify-end">
        <Skeleton className='rounded-full w-48 h-[32px] ' />
      </Flex>
    </Box>
  );
}

interface Props {
  free: boolean
}

const SubjectCard: React.FC<Props> = ({ free }) => {
  return (
    <React.Fragment>
      {free ?
        <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[18.5rem] flex flex-col">
          <Box className="w-full h-[127px] rounded-xl overflow-hidden">
            <Image
              alt="subject banner"
              src={subjectIcon}
              className="w-full h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
            />
          </Box>

          <Text className="font-semibold text-lg mt-3">Health Science</Text>

          <Box>
            {/* <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
              The study of healthy living. study of healthy living study of healthy living study of healthy living study of healthy living study of healthy living
            </Text> */}

            <Box>
              <Progress className="mt-2" value={50} size="sm" color="#FAA61A" />

              <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
                50% complete
              </Text>
            </Box>
          </Box>

          <Flex className="flex-grow justify-end">
            <Link href="/dashboard/subjects/123456">
              <UnstyledButton className="w-48 text-center hover:text-white rounded-full py-2 text-[#FAA61A] hover:bg-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
                Continue Learning
              </UnstyledButton>
            </Link>
          </Flex>
        </Box> :
        <Box className="relative opacity-80">
          <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[18.5rem] flex flex-col">
            <Box className="w-full h-[127px] rounded-xl overflow-hidden">
              <Image
                alt="subject banner"
                src={subjectIcon}
                className="w-full h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
              />
            </Box>

            <Text className="font-semibold text-lg mt-3">
              Health Science
            </Text>

            <Box>
              <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
                The study of healthy living. study of healthy living study of healthy living study of healthy living study of healthy living study of healthy living
              </Text>
            </Box>

            <Box className='absolute bg-opacity-0 bottom-5 right-5 z-10'>
              <Link href="#">
                <Flex className="justify-end">
                  <UnstyledButton className="w-40 text-center hover:text-white rounded-full py-2 text-[#FAA61A] hover:bg-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
                    Pay for plan
                  </UnstyledButton>
                </Flex>
              </Link>
            </Box>

            <Box className="absolute inset-0 flex items-center justify-center">
              <Image
                className='w-20 h-20'
                src={lock_icon}
                alt="lock icon"
                priority
              />
            </Box>
          </Box>
        </Box>
      }
    </React.Fragment>
  );
};

export default SubjectCard;