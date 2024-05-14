import React from "react";
import { Box, Text, Flex } from "@mantine/core";
import Image from "next/image";
import player_icon from "../../assets/svgs/player_icon.svg";

type Props = {
  item: {
    title: string;
    topic: string;
    img: any;
  };
};

const GeneralCoursesAds: React.FC<Props> = ({ item }) => {
  return (
    <div className="border-2 rounded-3xl bg-[white] border-[#E2E2E2] p-4 h-[18.4rem] w-[18rem] md:w-[22rem] flex flex-col">
      <div className="w-full h-[190px] rounded-xl overflow-hidden">
        <Image
          alt={item.title + "Banner"}
          src={item.img}
          className="w-full h-full object-cover hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
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
          {item.topic}
        </Text>
      </Box>

      <div className="absolute bottom-0 right-5 space-x-2 cursor-pointer">
        <Image alt="icon" priority className="w-20 h-20" src={player_icon} />
      </div>
    </div>
  );
};

export default GeneralCoursesAds;
