import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Box, Text, Modal, UnstyledButton } from "@mantine/core";
import { formatDate } from "@/helpers/functions/formatDate";

const ActivePlanCard = ({ sub }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const colors = [
    'green',
    'purple',
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [color] = useState(getRandomColor())

  return (
    <React.Fragment>
      <Box className='w-full border-2 max-w-[14rem] sm:max-w-none bg-white rounded-3xl border-[#E2E2E2] p-6 text-center space-y-5'>
        <Text className={`text-${color}-500 font-semibold text-lg`}>
          {sub.data.subscription_plan}
        </Text>

        <Text className="font-bold text-[#666666] text-2xl">
          Days left {sub.data.remaining_days}
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
          {sub.data.payment_method}
        </Text>

        <Box className="hidden">
          <Box className="bg-green-500 text-green-500  hover:bg-green-500" />
          <Box className="bg-green-100" />
          <Box className="bg-purple-500 text-purple-500  hover:bg-purple-500" />
          <Box className="bg-purple-100" />
        </Box>

        <Box>
          <UnstyledButton onClick={open} className={`w-full text-center text-${color}-500 py-2 bg-${color}-100  hover:bg-${color}-500 rounded-full font-semibold hover:text-white hover:bg-${color}-400 transition duration-75 delay-75 ease-linear`}>
            Preview Plan
          </UnstyledButton>
        </Box>
      </Box>

      <Modal
        size='lg'
        radius={5}
        opened={opened}
        onClose={close}
        title={
          <Text className="font-semibold text-lg text-[#444444]">
            Active Plan Details
          </Text>
        }
      >
        <Box className="my-4 space-y-5 w-full">
          <Box className="flex justify-between w-full">
            <Box>
              <Text className="font-[500] text-[#444444]">
                Subscription Plan
              </Text>
            </Box>

            <Box>
              <Text className="text-right font-[600] text-[#00433F]">
                {sub.data.subscription_plan}
              </Text>
            </Box>
          </Box>

          <Box className="flex justify-between w-full">
            <Box>
              <Text className="font-[500] text-[#444444]">
                Start Date
              </Text>
            </Box>

            <Box>
              <Text className="text-right font-[600] text-[#00433F]">
                {formatDate(sub.data.start_date)}
              </Text>
            </Box>
          </Box>

          <Box className="flex justify-between w-full">
            <Box>
              <Text className="font-[500] text-[#444444]">
                End Date
              </Text>
            </Box>

            <Box>
              <Text className="text-right font-[600] text-[#00433F]">
                {formatDate(sub.data.end_date)}
              </Text>
            </Box>
          </Box>

          <Box className="flex justify-between w-full">
            <Box>
              <Text className="font-[500] text-[#444444]">
                Remaining Days
              </Text>
            </Box>

            <Box>
              <Text className="text-right font-[600] text-[#00433F]">
                {sub.data.remaining_days}
              </Text>
            </Box>
          </Box>

          <Box className="flex justify-between w-full">
            <Box>
              <Text className="font-[500] text-[#444444]">
                Payment Method
              </Text>
            </Box>

            <Box>
              <Text className="text-right font-[600] text-[#00433F]">
                {sub.data.payment_method}
              </Text>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default ActivePlanCard