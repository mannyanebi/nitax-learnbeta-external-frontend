import React from 'react';
import { Box, Flex, Text, Skeleton, Progress, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import lock_icon from '../../assets/svgs/lock.svg'
import Link from 'next/link';
import { roundPercentage } from '@/helpers/functions/roundPercentage';
import { Icon } from '@iconify/react';

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

interface Props { subject: any }

const SubjectCard: React.FC<Props> = ({ subject }) => {
  return (
    <React.Fragment>
      {subject.has_access ?
        <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[18.5rem] flex flex-col">
          <Box className="w-full h-[127px] rounded-xl overflow-hidden">
            <Image
              alt="subject banner"
              src={subject.image}
              width={100}
              height={100}
              className="!w-full !h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
            />
          </Box>

          <Text className="font-semibold text-lg mt-3">
            {subject.name}
          </Text>

          <Box className="flex-grow">
            {subject.progress === 0 &&
              <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
                The study of healthy living. study of healthy living study of healthy living study of healthy living study of healthy living study of healthy living
              </Text>
            }

            {subject.progress > 0 &&
              <Box className="flex flex-col mt-2">
                <Progress value={subject.progress} size="sm" color="#FAA61A" />

                <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
                  {roundPercentage(subject.progress)}% complete
                </Text>
              </Box>
            }
          </Box>

          <Flex className='justify-end'>
            <Link href={`/dashboard/subjects/${subject.id}`}>
              <UnstyledButton className="w-[10.5rem] text-center hover:text-white rounded-full py-2 text-[#FAA61A] hover:bg-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear mt-2">
                {subject.progress === 0 ?
                  'Start Learning' :
                  subject.progress === 100 ?
                  "Start Over" :
                  "Continue Learning"
                }
              </UnstyledButton>
            </Link>
          </Flex>
        </Box> :
        <Box className="relative opacity-80">
          <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[18.5rem] flex flex-col">
            <Box className="w-full h-[127px] rounded-xl overflow-hidden">
              <Image
                alt="subject banner"
                priority
                src={subject.image}
                width={100}
                height={100}
                className="!w-full !h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
              />
            </Box>

            <Text className="font-semibold text-lg mt-3">
              {subject.name}
            </Text>

            <Box>
              <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
                {subject.description}
              </Text>
            </Box>

            <Box className='absolute bg-opacity-0 bottom-5 right-5 z-10'>
              <Box className='flex items-center space-x-3'>
                <Box>
                  <Link target='_blank' href={`/dashboard/subjects/${subject.id}`}>
                    <UnstyledButton className="w-9 hover:brightness-95 text-center hover:text-white rounded-full py-2 text-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
                      <Icon icon="icon-park-solid:preview-open" className='mx-auto' color="#faa61b" width="20" height="20" />
                    </UnstyledButton>
                  </Link>
                </Box>

                <Box>
                  <Link href="/profile?tab=subscriptions">
                    <Flex className="justify-end">
                      <UnstyledButton className="w-32 text-center hover:text-white rounded-full py-2 text-[#FAA61A] hover:bg-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
                        Subscribe
                      </UnstyledButton>
                    </Flex>
                  </Link>
                </Box>
              </Box>
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