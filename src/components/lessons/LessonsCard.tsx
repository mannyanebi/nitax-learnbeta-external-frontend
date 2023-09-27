import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { Box, Skeleton, Collapse, Flex, Text, UnstyledButton, List } from '@mantine/core'
import { UserContext } from '@/contexts/UserContext';
import { useDisclosure } from '@mantine/hooks';
import yellow_arrow from '../../assets/svgs/yellow_arrow_up.svg'
import { useQuery } from 'react-query';
import { getLesson } from '@/services/lessons';

export const LessonsCardSkeleton = () => {
  return (
    <Box>
      <Box className='rounded-2xl p-5 border-2 border-[#E2E2E2]'>
        <Flex className='justify-between items-center'>
          <Skeleton className='w-20 md:w-72 h-3' />
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
  selected: string;
  lesson: any
}

const LessonsCard: React.FC<Props> = ({ setSelected, selected, lesson }) => {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const [opened, { toggle }] = useDisclosure(false);
  const currentLesson = useQuery(['lessons', lesson.id], () => getLesson(token, lesson.id))

  return (
    <React.Fragment>
      <Box>
        <Box className={`bg-[#FEEDD1] rounded-2xl p-5 border-2 border-[#FAA61A]`}>
          <Flex className='justify-between'>
            <Text className='font-semibold text-[#FAA61A] text-lg truncate'>
              {lesson.title}
            </Text>



            <Flex className='items-center space-x-5'>
              {lesson.progress === 100 &&
                <Text className='font-semibold text-sm hidden sm:block truncate'>
                  Completed
                </Text>
              }

              <UnstyledButton
                onClick={() => {
                  if (selected) {
                    toggle()
                    setSelected('')
                  } else {
                    toggle()
                    setSelected(lesson.id)
                  }
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
            className='py-3'
            transitionDuration={150}
            transitionTimingFunction="linear"
          >
            <Box>
              <List>
                {currentLesson.isLoading &&
                  <Text className='animate-pulse font-semibold'>
                    Loading topics...
                  </Text>
                }

                {currentLesson.isError && currentLesson.error && (
                  <Text className='animate-pulse font-semibold text-red-500'>
                    {(currentLesson.error as any).response?.data?.errors}
                  </Text>
                )}

                {currentLesson.data &&
                  currentLesson.data.data.topics.length > 0 &&
                  currentLesson.data.data.topics.map((topic: any) => (
                    <List.Item key={topic.id} className='list-disc'>
                      <Text>
                        {topic.title}
                      </Text>
                    </List.Item>
                  ))
                }
              </List>

              {currentLesson.data &&
                currentLesson.data.data.topics < 1 &&
                  <Text className='animate-pulse font-semibold'>
                    *Topics for this lessons has not been added*
                  </Text>
              }
            </Box>
          </Collapse>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LessonsCard