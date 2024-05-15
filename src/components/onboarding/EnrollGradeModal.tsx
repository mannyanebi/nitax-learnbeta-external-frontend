import React, { useContext, useState } from "react";
import Logo from "../brand/Logo";
import {
  ScrollArea,
  Modal,
  Box,
  Flex,
  Text,
  UnstyledButton,
  Radio,
  Skeleton,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  useQuery,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { UserContext } from "@/contexts/UserContext";
import { getGradeLevels, onboardGrade } from "@/services/grades";
import { EmptyState } from "../onboarding/EmptyState";
import RefetchButton from "../onboarding/RefetchButton";
import { getCookieItem, setCookieItem } from "@/helpers/functions/cookie";

type GradeCheckCardProps = {
  gradeLevel: GradeLevelType;
  grade: string;
  mutation: UseMutationResult<any, unknown, void, unknown>;
};

type Props = {
  opened: any;
  close: any;
};

type GradeLevelType = {
  id: number;
  name: string;
};

const GradeCheckCard = ({
  gradeLevel,
  grade,
  mutation,
}: GradeCheckCardProps) => {
  return (
    <Box
      className={`border-2 transition duration-75 delay-75 ease-linear ${
        grade === gradeLevel.id.toString()
          ? "border-[#FAA61A]"
          : "border-[#E2E2E2]"
      } hover:border-[#FAA61A] p-4`}
    >
      <Radio
        value={gradeLevel.id.toString()}
        color="yellow"
        disabled={mutation.isLoading}
        label={
          <Text className="text-[#555555] font-semibold">
            {gradeLevel.name}
          </Text>
        }
      />
    </Box>
  );
};

const GradeCheckCardSkeleton = () => {
  return (
    <Flex className={`border-2 space-x-2 items-center border-[#E2E2E2] p-4`}>
      <Skeleton className="h-5 w-5 rounded-full" />
      <Skeleton className="h-3 w-40 rounded-full" />
    </Flex>
  );
};

export default function EnrollGradeModal({ opened, close }: Props) {
  const queryClient = useQueryClient();
  const [grade, setGrade] = useState("");
  const { user, setUser } = useContext(UserContext);
  const token = `Bearer ${user?.data?.access_token}`;
  const gradeLevels = useQuery("gradeLevels", () => getGradeLevels(token));
  const mutation = useMutation(() => onboardGrade(grade, token), {
    onError: (error: string) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      let user = getCookieItem("learnbeta_user");
      user.data.student = data.data;
      setCookieItem("learnbeta_user", user); // update cookies with new data
      setUser(user);
      setGrade("");
      toast.success(data.message);
      queryClient.invalidateQueries("gradeLevelSubjects");
      setTimeout(() => {
        close();
      }, 2000);
    },
  });

  const handleOnboarding = () => {
    mutation.mutate();
  };

  return (
    <Modal
      padding={0}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      fullScreen
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <Box className="px-4 sm:px-8 md:px-10 mb-4 md:mb-0 overflow-y-scroll">
        <Box className="max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto overflow-y-scroll">
          <Flex className="justify-end">
            <Link href="/">
              <Logo />
            </Link>
          </Flex>
          <Box className="text-center lg:my-20 my-10">
            <Text className="font-semibold text-2xl lg:text-3xl">
              Welcome to LearnBeta
            </Text>
            <Text className="lg:text-lg mt-3">
              You are almost there, select your grade to get started
            </Text>
            <Radio.Group
              onChange={setGrade}
              value={grade}
              name="grade"
              className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-10 space-y-5 sm:space-y-0 sm:gap-5 max-w-[55rem] xl:max-w-[60rem] 2xl:max-w-[70rem] mx-auto"
            >
              {gradeLevels.data &&
                gradeLevels.data.data.map((gradeLevel: GradeLevelType) => (
                  <GradeCheckCard
                    grade={grade}
                    mutation={mutation}
                    key={gradeLevel.id}
                    gradeLevel={gradeLevel}
                  />
                ))}
              {gradeLevels.isLoading &&
                [1, 2, 3, 4, 5, 6].map((num: number) => (
                  <GradeCheckCardSkeleton key={num} />
                ))}
            </Radio.Group>

            {gradeLevels.isError && (
              <Box className="flex justify-center">
                <RefetchButton
                  retry={() => gradeLevels.refetch()}
                  message="Failed to fetch grades!"
                />
              </Box>
            )}

            {gradeLevels.data && gradeLevels.data.data.length < 1 && (
              <EmptyState message="No grades available" />
            )}
          </Box>

          {gradeLevels.data && gradeLevels.data.data.length > 0 && (
            <Box className="mt-10 text-center">
              <UnstyledButton
                disabled={mutation.isLoading || !grade}
                type="button"
                onClick={handleOnboarding}
                className="mb-4 px-4 w-60 h-14 text-center font-bold transition disabled:opacity-50 duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
              >
                {mutation.isLoading ? (
                  <Icon
                    className={`animate-spin mx-auto`}
                    icon="icomoon-free:spinner2"
                    color="#white"
                    width="20"
                    height="20"
                  />
                ) : (
                  "Continue"
                )}
              </UnstyledButton>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="h-2"></Box>
    </Modal>
  );
}
