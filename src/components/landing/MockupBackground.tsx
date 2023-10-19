import React from "react";
import Image from "next/image";
import { Box } from "@mantine/core";
import purple_vc from "../../assets/svgs/purple_vector.svg";
import orange_vc from "../../assets/svgs/orange_vc.svg";

export default function MockupBackground() {
  return (
    <Box className="mt-[-2rem] flex justify-between">
      <Image
        alt="hero"
        priority
        className="w-[80px] xl:w-[130px] xl:h-[260px] 2xl:w-[180px] 2xl:h-[360px] h-[160px] lg:w-[100px] lg:h-[200px]"
        src={purple_vc}
      />
      <Image
        alt="hero"
        priority
        className="w-[80px] 2xl:w-[180px] 2xl:h-[360px] h-[160px] xl:w-[130px] xl:h-[260px] lg:w-[100px] lg:h-[200px] hidden sm:block"
        src={orange_vc}
      />
    </Box>
  );
}
