import React from 'react';
import { Box, Flex, Text, Skeleton, Progress, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import lock_icon from '../../assets/svgs/lock.svg'
import subjectIcon from '../../assets/svgs/subject_icon.svg'
import Link from 'next/link';
import { Icon } from '@iconify/react';

export const SelectSubjectSkeleton = () => {
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
  subject: any; 
  handleAddSubject: (subjectId: number) => void;
  selectedSubjects: number[]
}

const SelectSubjectCard: React.FC<Props> = ({ subject, handleAddSubject, selectedSubjects }) => {
  return (
    <React.Fragment>
      <Box className="border-2 rounded-xl border-[#E2E2E2] p-5 h-[17rem] flex flex-col">
        <Box className="w-full h-[127px] rounded-xl overflow-hidden">
          <Image
            alt="subject banner"
            // src={subject.image}
            src={subjectIcon}
            className="w-full h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
          />
        </Box>

        <Text className="font-semibold text-lg mt-3">
          {subject.name}
        </Text>

        <Box>
          <Text className="text-[#888888] text-sm font-semibold mt-1 truncate">
            The study of healthy living. study of healthy living study of healthy living study of healthy living study of healthy living study of healthy living
          </Text>
        </Box>

        <Flex className="flex-grow justify-end mt-2 space-x-2">
          <Box>
            <Link target='_blank' href={`/dashboard/subjects/${subject.id}`}>
              <UnstyledButton className="w-9 hover:brightness-90 text-center hover:text-white rounded-full py-2 text-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
                <Icon icon="icon-park-solid:preview-open" className='mx-auto' color="#faa61b" width="20" height="20" />
              </UnstyledButton>
            </Link>
          </Box>

          <Box>
            <UnstyledButton onClick={() => handleAddSubject(subject.id)} className="w-9 hover:brightness-90 text-center hover:text-white rounded-full py-2 text-[#FAA61A] font-semibold text-sm bg-[#FEEDD1] transition duration-75 delay-75 ease-linear">
              {selectedSubjects.includes(subject.id) ? (
                <Icon icon="iconamoon:check-bold" color="#faa61b" className='mx-auto' width="20" height="20" />
              ) : (
                <Icon icon="ic:round-plus" className='mx-auto' color="#faa61b" width="20" height="20" />
              )}
            </UnstyledButton>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default SelectSubjectCard;