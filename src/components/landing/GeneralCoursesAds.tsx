import React, { useState } from "react";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import player_icon from "../../assets/svgs/player_icon.svg";
import ReactPlayer from "react-player";

type Props = {
  item: {
    title: string;
    link: string;
  };
};

const GeneralCoursesAds: React.FC<Props> = ({ item }) => {
  const [play, setPlay] = useState(false);

  const handlePlaying = () => {
    setPlay(!play);
  };

  return (
    <div className="border-2 rounded-3xl bg-[white] border-[#E2E2E2] p-4 h-[18.5rem] w-[18rem] md:w-[22rem] flex flex-col">
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        <ReactPlayer
          url={item.link}
          playing={play}
          width={"100%"}
          height={"100%"}
          onPause={() => setPlay(false)}
          onPlay={() => setPlay(true)}
          controls={true}
        />
      </div>

      <Text className="font-semibold md:text-lg text-base mt-3 sm:max-w-64 max-w-48 break-all">
        {item.title}
      </Text>

      {/* <Box>
        <Text
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            width: 250,
            textOverflow: "ellipsis",
          }}
          className="text-[#888888] text-sm font-semibold mt-1"
        >
          {item.topic}
        </Text>
      </Box> */}

      <div
        className="absolute bottom-10 right-10 space-x-2 cursor-pointer sm:w-14 w-11 bg-orange-500 rounded-2xl p-1 text-center"
        onClick={handlePlaying}
      >
        <p className="text-white font-semibold text-xs">
          {play ? "Pause" : "Play"}
        </p>
        {/* <Image alt="icon" priority className="w-20 h-20" src={player_icon} /> */}
      </div>
    </div>
  );
};

export default GeneralCoursesAds;
