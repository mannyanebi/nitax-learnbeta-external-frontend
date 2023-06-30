import React, { useState } from "react";
import { Box, Divider, Center, Text, Flex } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import preview_subject from '../../assets/svgs/empty_state.svg'
import Image from "next/image";
import PlanCard, { PlanCardSkeleton } from "./PlanCard";
import CheckoutDrawer from "./CheckoutDrawer";

export default function Subscriptions() {
  const [cart, setCart] = useState<any>([])
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubscribe = (object: {}) => {
    setCart(object)
    open()
  }

  return (
    <Box className="px-4 sm:px-8 md:px-10">
      <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto space-y-10 w-full">
        <Box>
          <Divider
            my="xs"
            size='sm'
            labelProps={{
              style: {
                fontSize: '1.125rem',
                fontWeight: 600
              }
            }}
            label="Current Active Plan"
          />

          {/* <Box className="sm:grid lg:grid-cols-4 lg:gap-10 xl:grid-cols-5 sm:grid-cols-3 sm:gap-4 sm:space-y-0 mt-8 space-y-5 flex-col flex sm:flex-none items-center">
            <PlanCard />
            <PlanCardSkeleton />
            <PlanCardSkeleton />
          </Box> */}

          <Box className="w-full mx-auto mt-8">
            <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] rounded-2xl'>
              <Box>
                <Image
                  alt='icon'
                  priority
                  src={preview_subject}
                  className='w-[15rem] mx-auto'
                />
                <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                  No active plan
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>

        <Box>
          <Divider
            my="xs"
            size='sm'
            labelProps={{
              style: {
                fontSize: '1.125rem',
                fontWeight: 600
              }
            }}
            label="Subscription Plans"
          />

          <Box className="sm:grid lg:grid-cols-4 lg:gap-10 sm:grid-cols-3 sm:gap-4 sm:space-y-0 mt-8 space-y-5 flex-col flex sm:flex-none items-center">
            <PlanCard 
              handleSubscribe={handleSubscribe} 
            />
            <PlanCard
              handleSubscribe={handleSubscribe}
            />
            {/* <PlanCardSkeleton />
            <PlanCardSkeleton /> */}
          </Box>

          <CheckoutDrawer 
            cart={cart}
            opened={opened} 
            close={close} 
          />
        </Box>
      </Box>
    </Box>
  )
}