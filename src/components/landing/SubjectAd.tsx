import React from 'react';
import { Box, Text } from "@mantine/core";
import Image from "next/image";

type Props = {
  item: {
    title: string;
    description: string;
    img: any
  }
}

const SubjectAd: React.FC<Props> = ({ item }) => {
  return (
    <Box className="border-2 rounded-3xl bg-white border-[#E2E2E2] p-4 h-[18.5rem] w-[18rem] flex flex-col">
      <Box className="w-full h-[127px] rounded-xl overflow-hidden">
        <Image
          alt="subject banner"
          src={item.img}
          className="w-full h-[127px] object-cover object-center rounded-xl hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
        />
      </Box>

      <Text className="font-semibold text-lg mt-3">
        {item.title}
      </Text>

      <Box>
        <Text className="text-[#888888] truncate text-sm font-semibold mt-1">
          {item.description}
        </Text>
      </Box>
    </Box>
  );
};

export default SubjectAd;