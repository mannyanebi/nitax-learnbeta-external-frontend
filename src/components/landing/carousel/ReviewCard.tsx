import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@mantine/core";

export default function ReviewCard({ name, review }: any) {
  return (
    <Box className="xl:w-[36rem] rounded-xl lg:w-[33rem] w-64 md:w-[30rem] sm:w-[25rem] relative h-[16rem] md:h-[18rem] hover:scale-105 bg-[#00433F] transition duration-75 delay-75 ease-linear hover:bg-[#5D5EC7]">
      <Flex className="h-full items-center p-5 sm:px-10 max-w-[28rem] mx-auto">
        <Flex className="flex-col items-center md:space-y-4 space-y-2 w-full text-white font-semibold text-lg text-center">
          <Flex className="md:flex-row md:items-center md:space-x-2 flex-col items-center">
            <Text className="md:text-lg">{name}</Text>
          </Flex>

          <Text
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-sm font-normal sm:text-base"
          >
            {review}
          </Text>
        </Flex>
      </Flex>

      <Box className="absolute z-10 rounded-r-lg rounded-l-sm shadow-lg mt-[-0.5rem] mr-[-0.5rem] top-0 h-12 w-12 bg-[#FD7342] right-0" />
    </Box>
  );
}
