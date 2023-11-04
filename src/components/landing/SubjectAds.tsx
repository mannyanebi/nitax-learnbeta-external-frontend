import React from "react";
import { Box, Text, Flex } from "@mantine/core";
import Image from "next/image";
import group_icon from "../../assets/svgs/users_group.svg";

type Props = {
  item: {
    title: string;
    description: string;
    img: any;
    students: number;
  };
};

const SubjectAds: React.FC<Props> = ({ item }) => {
  return (
    <div className="border-2 rounded-3xl bg-[white] border-[#E2E2E2] p-4 h-[18.2rem] w-[16rem] md:w-[18rem] flex flex-col">
      <div className="w-full h-[127px] rounded-xl overflow-hidden">
        <Image
          alt={item.title + "Banner"}
          src={item.img}
          className="w-full h-[127px] object-cover hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
        />
      </div>

      <Text className="font-semibold text-lg mt-3">{item.title}</Text>

      <Box>
        <Text
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="text-[#888888] text-sm font-semibold mt-1"
        >
          {item.description}
        </Text>
      </Box>

      <div className="flex items-center justify-end absolute bottom-4 right-6 space-x-2">
        <Image alt="icon" src={group_icon} className="w-8 h-8" />

        <p className="text-[#444444] font-semibold ">{item.students}+</p>
      </div>
    </div>
  );
};

export default SubjectAds;
