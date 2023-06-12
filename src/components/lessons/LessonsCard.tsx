import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Skeleton, Collapse, Flex, Text, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import yellow_arrow from '../../assets/svgs/yellow_arrow_up.svg'

export const LessonsCardSkeleton = () => {
  return (
    <Box>
      <Box className='rounded-2xl p-5 border-2 border-[#E2E2E2]'>
        <Flex className='justify-between items-center'>
          <Skeleton className='w-20 md:w-72 h-3'/>
          <Box>
            <Skeleton className='w-7 h-7 rounded-full' />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>,
  selected: string
}

const LessonsCard: React.FC<Props> = ({ setSelected, selected }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Box>
        <Box className={`bg-[#FEEDD1] rounded-2xl p-5 border-2 border-[#FAA61A]`}>
          <Flex className='justify-between'>
            <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
              Introduction to Mathematics
            </Text>

            <Flex className='items-center space-x-2'>
              <UnstyledButton 
                // onClick={() => {
                //   selected ?
                //   setSelected('') :
                //   setSelected('909090')
                //   toggle()
                // }}
                onClick={() => {
                  setSelected('909090')
                  toggle()
                }} 
                className={`${opened && 'rotate-180'} transition duration-150 delay-75 ease-linear`}
              >
                <Image
                  priority
                  alt="icon"
                  src={yellow_arrow}
                  width={25}
                  height={25}
                />
              </UnstyledButton>
            </Flex>
          </Flex>

          <Collapse
            in={opened}
            className='my-3'
            transitionDuration={150}
            transitionTimingFunction="linear"
          >
            <Box>
              <Text>
                What is Mathematics?
              </Text>

              <Text>
                What is Mathematics?
              </Text>

              <Text>
                What is Mathematics?
              </Text>

              <Text>
                What is Mathematics?
              </Text>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LessonsCard