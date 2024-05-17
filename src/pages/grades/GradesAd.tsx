import React from "react";
import { Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    title: string;
    img: any;
    to: string;
  };
};

const GradesAd: React.FC<Props> = ({ item }) => {
  return (
    <div className="border shadow-md rounded-3xl bg-[white]  p-4 h-[14rem]  flex flex-col">
      <Link
        href={item.to}
        className="w-full h-[12rem] rounded-xl overflow-hidden cursor-pointer"
      >
        <Image
          alt={item.title + "Banner"}
          src={item.img}
          className="w-full h-full object-cover hover:brightness-75 hover:scale-125 transition duration-200 delay-75 ease-linear"
        />
      </Link>

      <Text className="font-semibold text-md mt-1">{item.title}</Text>
    </div>
  );
};

export default GradesAd;
