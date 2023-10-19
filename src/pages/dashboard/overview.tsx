import React, { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Head from "next/head";
import {
  BackgroundImage,
  Box,
  Center,
  Divider,
  Flex,
  Text,
} from "@mantine/core";
import hero_banner from "../../assets/svgs/hero_banner.svg";
import DashboardLayout from "@/layouts/DashboardLayout";
import preview_subject from "../../assets/svgs/empty_state.svg";
import Image from "next/image";
import { useQuery } from "react-query";
import { getGradeLevelSubjects } from "@/services/subjects";
import SubjectCard, {
  SubjectCardSkeleton,
} from "@/components/subjects/SubjectCard";
import RefetchButton from "@/components/onboarding/RefetchButton";

const Overview = () => {
  const { user } = useContext(UserContext);
  const token = `Bearer ${user?.data?.access_token}`;

  const gradeLevelSubjects = useQuery(
    "gradeLevelSubjects",
    () => getGradeLevelSubjects(token),
    {
      staleTime: 30000, // Set to 30 seconds (30,000 milliseconds)
      refetchInterval: 30000, // Set to 30 seconds (30,000 milliseconds)
    }
  );

  console.log(gradeLevelSubjects);

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Overview</title>
      </Head>

      <BackgroundImage
        src={hero_banner.src}
        className="h-60 bg-right md:hidden text-white font-bold px-4 sm:px-8"
      >
        <Flex className="h-full items-center">
          <Box>
            <Text className="text-3xl">Hi, {user?.data?.student?.name}!</Text>

            <Text className="mt-2">
              Welcome to your study dashboard, where you can explore a world of
              knowledge and unleash your full potential!
            </Text>
          </Box>
        </Flex>
      </BackgroundImage>

      <Box className="px-4 sm:px-8 md:pl-8 md:pr-14 lg:pr-20 mt-5 lg:mt-8">
        <BackgroundImage
          src={hero_banner.src}
          className="h-40 bg-right md:block hidden rounded-xl text-white font-bold px-10"
        >
          <Flex className="h-full items-center">
            <Box>
              <Text className="text-3xl">Hi, {user?.data?.student?.name}!</Text>

              <Text className="mt-2">
                Welcome to your study dashboard, where you can explore{" "}
                <br className="hidden lg:block" /> a world of knowledge and
                unleash your full potential!
              </Text>
            </Box>
          </Flex>
        </BackgroundImage>

        <Box>
          <Box>
            <Divider
              className="mt-5 lg:mt-8"
              my="xs"
              size="sm"
              labelProps={{
                style: {
                  fontSize: "1.125rem",
                  fontWeight: 600,
                },
              }}
              label="Continue Learning"
            />
          </Box>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
            {gradeLevelSubjects.isLoading ? (
              [1, 2, 3].map((num: number) => <SubjectCardSkeleton key={num} />)
            ) : gradeLevelSubjects.isError ? (
              <RefetchButton
                message="Failed to fetch subjects in your grade"
                retry={() => gradeLevelSubjects.refetch()}
              />
            ) : gradeLevelSubjects.data.data.length ? (
              gradeLevelSubjects.data.data
                .filter((subject: any) => subject.has_access === true)
                .map((subject: any) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))
            ) : gradeLevelSubjects.data.data.length < 1 ? (
              <Box className="w-full mx-auto">
                <Center className="h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                    <Text className="text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center">
                      There are no subjects in your grade yet
                    </Text>
                  </Box>
                </Center>
              </Box>
            ) : gradeLevelSubjects.data.data.length > 0 ? (
              gradeLevelSubjects.data.data
                .filter((subject: any) => subject.has_access === true)
                .every((subject: any) => subject.progress === 0)
            ) : null}
          </Box>

          {/* {gradeLevelSubjects.data &&
            (gradeLevelSubjects.data.data.length > 0 &&
            gradeLevelSubjects.data.data
              .filter((subject: any) => subject.has_access === true)
              .every((subject: any) => subject.progress === 0) ? (
              <Box className="w-full mx-auto">
                <Center className="h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                    <Text className="text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center">
                      Select a subject and start learning
                    </Text>
                  </Box>
                </Center>
              </Box>
            ) : null)} */}

          {/* if no subjects exist in the user's grade lvl, display no subjects banner */}
          {/* {gradeLevelSubjects.data &&
            gradeLevelSubjects.data.data.length < 1 && (
              <Box className="w-full mx-auto">
                <Center className="h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                    <Text className="text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center">
                      There are no subjects in your grade yet
                    </Text>
                  </Box>
                </Center>
              </Box>
            )} */}

          {/* Other Subjects */}
          <Box>
            <Divider
              className="mt-5 lg:mt-8"
              my="xs"
              size="sm"
              labelProps={{
                style: {
                  fontSize: "1.125rem",
                  fontWeight: 600,
                },
              }}
              label="Other Subjects"
            />
          </Box>

          <Box className="grid grid-cols-1 mt-6 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
            {/* if user is not subscribed or has no subscription plan, display all subjects in the grade level */}
            {/* {gradeLevelSubjects.data &&
            gradeLevelSubjects.data.data.length > 0 &&
            (!user.data.student.subscription ||
              user.data?.student?.subscription?.is_expired)
              ? gradeLevelSubjects.data.data.map((subject: any) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))
              : null} */}

            {/* if user is subscribed or has an ongoing subscription plan, display subjects without access */}
            {gradeLevelSubjects.data &&
            gradeLevelSubjects.data.data.length > 0 &&
            (user.data.student.subscription ||
              !user.data?.student?.subscription?.is_expired)
              ? gradeLevelSubjects.data.data
                  .filter((subject: any) => subject.has_access === false)
                  .map((subject: any) => (
                    <SubjectCard key={subject.id} subject={subject} />
                  ))
              : null}

            {/* if data is fetching, display loading skeletons */}
            {gradeLevelSubjects.isLoading &&
              [1, 2, 3].map((num: number) => <SubjectCardSkeleton key={num} />)}
          </Box>

          {/* if no subjects exist in the user's grade lvl, display no subjects banner */}
          {gradeLevelSubjects.data &&
            gradeLevelSubjects.data.data.length < 1 && (
              <Box className="w-full mx-auto">
                <Center className="h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl">
                  <Box>
                    <Image
                      alt="icon"
                      priority
                      src={preview_subject}
                      className="w-[20rem] mx-auto"
                    />
                    <Text className="text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center">
                      There are no subjects in your grade yet
                    </Text>
                  </Box>
                </Center>
              </Box>
            )}

          {/* Check if all subjects have has_access as true */}
          {gradeLevelSubjects.data &&
          gradeLevelSubjects.data.data.length > 0 &&
          gradeLevelSubjects.data.data.every(
            (subject: any) => subject.has_access
          ) ? (
            <Box className="w-full mx-auto">
              <Center className="h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl">
                <Box>
                  <Image
                    alt="icon"
                    priority
                    src={preview_subject}
                    className="w-[20rem] mx-auto"
                  />
                  <Text className="text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center">
                    You have access to every subject!
                  </Text>
                </Box>
              </Center>
            </Box>
          ) : null}

          {/* if data fetching returns error, display refetch button */}
          {gradeLevelSubjects.isError && (
            <RefetchButton
              message="Failed to fetch subjects in your grade"
              retry={() => gradeLevelSubjects.refetch()}
            />
          )}
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Overview;
