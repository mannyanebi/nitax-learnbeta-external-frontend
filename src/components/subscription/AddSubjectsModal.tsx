import React, { useContext, useState } from "react";
import { Box, Center, Divider, Modal, ScrollArea, Text, UnstyledButton } from '@mantine/core';
import preview_subject from '../../assets/svgs/empty_state.svg'
import SelectSubjectCard, { SelectSubjectSkeleton } from "../subjects/SelectSubjectCard";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useMutation, useQuery } from "react-query";
import { addSubjectsToPlan, getGradeLevelSubjects } from "@/services/subjects";
import toast from "react-hot-toast";
import { UserContext } from "@/contexts/UserContext";
import RefetchButton from "../onboarding/RefetchButton";

type Props = {
  opened: boolean;
  cart: any;
  close: () => void
}

export default function AddSubjectModal({
  opened,
  cart,
  close
}: Props) {
  const { user } = useContext(UserContext)
  const token = `Bearer ${user?.data?.access_token}`

  const gradeLevelSubjects = useQuery('gradeLevelSubjects', () => getGradeLevelSubjects(token))

  const [selectedSubjects, setSelectedSubjects] = useState<number[]>([]);

  const limit = cart?.subjects_allowed
  const subjectsLeft = limit - selectedSubjects.length;

  const addSubjectMutation = useMutation((data: any) => addSubjectsToPlan(token, data), {
    onError: (error: any) => {
      toast.error(error.response.data.errors);
    },

    onSuccess: (data: any) => {
      toast.success('Subjects added successfully');
      close()
    }
  })

  const handleAddSubject = (subjectId: number) => {
    // Check if the subjectId is already in selectedSubjects
    const subjectIndex = selectedSubjects.indexOf(subjectId);

    if (subjectIndex === -1) {
      // If not present and the limit has not been reached, add it to the array
      if (selectedSubjects.length < limit) {
        setSelectedSubjects([...selectedSubjects, subjectId]);
      } else {
        // Display an error message or handle the case where the limit is reached
        return
      }
    } else {
      // If already present, remove it from the array
      const updatedSubjects = [...selectedSubjects];
      updatedSubjects.splice(subjectIndex, 1);
      setSelectedSubjects(updatedSubjects);
    }
  };

  const handleSubmit = () => {
    const payload = {
      subject_ids: selectedSubjects
    }

    addSubjectMutation.mutate(payload)
  }

  return (
    <Modal
      opened={opened}
      withCloseButton={false}
      closeOnClickOutside={false}
      overlayProps={{
        color: 'black',
        blur: 5
      }}
      yOffset="1vh"
      scrollAreaComponent={ScrollArea.Autosize}
      transitionProps={{
        duration: 100,
        timingFunction: 'linear'
      }}
      size='xl'
      title={
        gradeLevelSubjects.data &&
        <Text className="font-[600] text-xl">
          Select {limit} subjects you will like to have access to
        </Text>
      }
      onClose={close}
    >
      <Divider
        size='sm'
        labelProps={{
          style: {
            fontSize: '1rem',
            fontWeight: 600
          }
        }}
        label={
          <Text className="text-[#666666]">
            Subjects in your grade
          </Text>
        }
      />

      {gradeLevelSubjects.data &&
        <Text className="text-[#666666] mt-4">
          {subjectsLeft} {subjectsLeft === 1 ? 'subject' : 'subjects'} left to select
        </Text>
      }

      <Box className="grid grid-cols-1 mt-6 lg:grid-cols-3 gap-3 lg:gap-6 sm:gap-4 max-w-[57.5rem] sm:grid-cols-2 xl:grid-cols-3">
        {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length > 0 &&
          gradeLevelSubjects.data.data.map((subject: any) => (
            <SelectSubjectCard
              selectedSubjects={selectedSubjects}
              handleAddSubject={handleAddSubject}
              key={subject.id}
              subject={subject}
            />
          ))
        }

        {gradeLevelSubjects.isLoading &&
          [1, 2, 3].map((num: number) => (
            <SelectSubjectSkeleton
              key={num}
            />
          ))
        }
      </Box>

      {gradeLevelSubjects.data && gradeLevelSubjects.data.data.length < 1 &&
        <Box className="w-full mx-auto">
          <Center className='h-[30rem] bg-gradient-to-br from-[#FAAB2E] to-[#d9f3f1] p-5 rounded-2xl'>
            <Box>
              <Image
                alt='icon'
                priority
                src={preview_subject}
                className='w-[20rem] mx-auto'
              />
              <Text className='text-[#00433F] font-semibold mt-10 text-lg xl:text-2xl text-center'>
                There are no subjects in your grade yet
              </Text>
            </Box>
          </Center>
        </Box>
      }

      {gradeLevelSubjects.isError &&
        <RefetchButton
          message="Failed to fetch subjects in your grade"
          retry={() => gradeLevelSubjects.refetch()}
        />
      }

      {gradeLevelSubjects.data &&
        <Box className="text-center mt-10">
          <UnstyledButton
            disabled={subjectsLeft !== 0 || addSubjectMutation.isLoading}
            onClick={handleSubmit}
            className="px-4 w-40 h-10 text-center font-bold transition disabled:opacity-50 duration-75 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-2 bg-[#FAA61A] text-white"
          >
            {addSubjectMutation.isLoading ?
              <Icon
                className={`animate-spin mx-auto`}
                icon="icomoon-free:spinner2"
                color="#white"
                width="20"
                height="20"
              /> :
              'Submit'
            }
          </UnstyledButton>
        </Box>
      }
    </Modal>
  )
}