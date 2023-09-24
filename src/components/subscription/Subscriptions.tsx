import React, { useState, useContext } from "react";
import { Box, Divider, Center, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import preview_subject from '../../assets/svgs/empty_state.svg'
import { UserContext } from "@/contexts/UserContext"
import Image from "next/image";
import PlanCard, { PlanCardSkeleton } from "./PlanCard";
import CheckoutDrawer from "./CheckoutDrawer";
import { useQuery } from "react-query";
import { getCurrentPlan, getSubscriptionPlans } from "@/services/subscriptions";
import RefetchButton from "../onboarding/RefetchButton";
import AddSubjectModal from "./AddSubjectsModal";
import { Toaster } from "react-hot-toast";
import ActivePlanCard from "./ActivePlanCard";

export default function Subscriptions() {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`
  const [cart, setCart] = useState<any>([])
  const [opened, { open, close }] = useDisclosure(false);
  const [openedAddSubjects, { open: openAddSubjects, close: closeAddSubjects }] = useDisclosure(false);
  const subscriptions = useQuery('subscriptions', () => getSubscriptionPlans(token))
  const currentPlan = useQuery('currentPlan', () => getCurrentPlan(token))

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

          <Box className="sm:grid lg:grid-cols-4 lg:gap-10 sm:grid-cols-3 sm:gap-4 sm:space-y-0 mt-8 space-y-5 flex-col flex sm:flex-none items-center">
            {currentPlan.data && currentPlan.data.data &&
              <ActivePlanCard
                sub={currentPlan.data}
              />
            }

            {currentPlan.isLoading &&
              [1, 2].map((num: number) => (
                <PlanCardSkeleton
                  key={num}
                />
              ))
            }
          </Box>

          {currentPlan.isError &&
            <RefetchButton
              retry={() => currentPlan.refetch()}
              message="Failed to fetch subscription plans!"
            />
          }

          {currentPlan.data && !currentPlan.data.data  &&
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
          }
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
            {subscriptions.data &&
              subscriptions.data.data.map((sub: any, index: number) => (
                <PlanCard
                  key={index}
                  sub={sub}
                  handleSubscribe={handleSubscribe}
                />
              ))}

            {subscriptions.isLoading &&
              [1, 2].map((num: number) => (
                <PlanCardSkeleton
                  key={num}
                />
              ))
            }
          </Box>

          {subscriptions.isError &&
            <RefetchButton
              retry={() => subscriptions.refetch()}
              message="Failed to fetch subscription plans!"
            />
          }

          {subscriptions.data &&
            subscriptions.data.data.length < 1 &&
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
                    There are no subscriptions yet
                  </Text>
                </Box>
              </Center>
            </Box>
          }

          <CheckoutDrawer 
            cart={cart}
            opened={opened} 
            openAddSubjects={openAddSubjects}
            close={close} 
          />

          <AddSubjectModal
            cart={cart}
            opened={openedAddSubjects}
            close={closeAddSubjects}
          />

          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </Box>
      </Box>
    </Box>
  )
}