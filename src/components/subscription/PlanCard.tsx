import React, { useState } from "react";
import { Box, Text, UnstyledButton, Skeleton, List, Modal } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

export const PlanCardSkeleton = () => {
  return (
    <Box className='w-full border-2 rounded-3xl border-[#E2E2E2] p-6 text-center space-y-7'>
      <Skeleton className="mx-auto w-40 h-4" />
      <Skeleton className="mx-auto w-full h-6" />
      <Skeleton className={`h-3 w-3 rounded-full mx-auto`} />
      <Box className='space-y-2'>
        <Skeleton className="mx-auto rounded-full w-full h-2" />
        <Skeleton className="mx-auto rounded-full w-40 h-2" />
        <Skeleton className="mx-auto rounded-full w-20 h-2" />
      </Box>
      <Skeleton className="mx-auto w-full h-8 rounded-full" />
    </Box>
  )
}

const PlanCard = ({ handleSubscribe }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const colors = [
    'yellow',
    'green',
    'blue',
    'purple',
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [color] = useState(getRandomColor())

  const planObject = {
    id: 1,
    name: 'Handy'
  }

  return (
    <React.Fragment>
      <Box className='w-full border-2 max-w-[14rem] sm:max-w-none bg-white rounded-3xl border-[#E2E2E2] p-6 text-center space-y-5'>
        <Text className={`text-${color}-500 font-semibold text-lg`}>
          Premium Plan
        </Text>

        <Text className="font-bold text-[#666666] text-2xl">
          #5,000
        </Text>

        <Box className={`h-3 w-3 bg-${color}-500 rounded-full mx-auto`} />

        <Text
          className="text-[#666666]"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Access to all subjects and their lessons
        </Text>

        <Box className="hidden">
          <Box className="bg-yellow-500 text-yellow-500  hover:bg-yellow-500" />
          <Box className="bg-yellow-100" />
          <Box className="bg-green-500 text-green-500  hover:bg-green-500" />
          <Box className="bg-green-100" />
          <Box className="bg-blue-500 text-blue-500  hover:bg-blue-500" />
          <Box className="bg-blue-100" />
          <Box className="bg-purple-500 text-purple-500  hover:bg-purple-500" />
          <Box className="bg-purple-100" />
        </Box>

        <Box>
          <UnstyledButton onClick={open} className={`w-full text-center text-${color}-500 py-2 bg-${color}-100  hover:bg-${color}-500 rounded-full font-semibold hover:text-white hover:bg-${color}-400 transition duration-75 delay-75 ease-linear`}>
            View Package
          </UnstyledButton>
        </Box>
      </Box>

      <Modal
        size='lg'
        radius={12}
        opened={opened} 
        onClose={close}
      >
        <Box className='px-2 pb-14 sm:px-8 md:px-10'>
          <Text className='font-semibold text-center text-lg'>
            Premium Plan
          </Text>

          <Text className='font-semibold mt-10'>
            Items contained in plan
          </Text>

          <List 
            className="mt-6 list-disc space-y-5" 
            withPadding
          >
            <List.Item>
              <Text>
                This is item one listed for the user to see
              </Text>
            </List.Item>

            <List.Item>
              <Text>
                This is item one listed for the user to see
              </Text>
            </List.Item>

            <List.Item>
              <Text>
                This is item one listed for the user to see
              </Text>
            </List.Item>

            <List.Item>
              <Text>
                This is item one listed for the user to see
              </Text>
            </List.Item>
          </List>

          <Box className="text-center mt-14">
            <UnstyledButton
              onClick={() => {
                close()
                handleSubscribe(planObject)
              }}
              className="px-8 w-72 h-14 text-center font-bold transition duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
            >
              Subscribe to Plan
            </UnstyledButton>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  )
}
export default PlanCard