import React, { useRef } from "react";
import { Box, Text, BackgroundImage } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import math from "../../assets/svgs/social science.svg";
import health from "../../assets/svgs/subject_icon.svg";
import social from "../../assets/svgs/health science.svg";
import GeneralCoursesAds from "./GeneralCoursesAds";
import bg_hero from "../../assets/svgs/bg_yellow.svg";
import bg_light_blue from "../../assets/svgs/bg_light_blue.svg";

export default function GeneralCourses() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const ads = [
    {
      title: "Mathematics",
      topic: "Topic",
      img: math,
    },
    {
      title: "Social Studies",
      topic: "Topic",
      img: health,
    },
    {
      title: "Health Science",
      topic: "Topic",
      img: social,
    },
    {
      title: "Computer Science",
      topic: "Topic",
      img: health,
    },
    {
      title: "Agric Science",
      topic: "Topic",
      img: social,
    },
  ];
  return (
    <BackgroundImage
      src={bg_hero.src}
      className="py-10 bg-no-repeat bg-cover lg:bg-top "
    >
      <BackgroundImage
        src={bg_light_blue.src}
        className="py-16 rounded-2xl border-2 border-[#05756E] border-dashed bg-no-repeat bg-cover bg-left lg:bg-center"
      >
        <Box className="px-10">
          <Text className="font-bold text-3xl text-[#00433F] text-center">
            Discover a treasure trove of essential subjects!
          </Text>

          <Text className="text-center mt-3">
            Get a sneak peek of our offerings and embark on a journey of
            knowledge and growth.
          </Text>
        </Box>

        <Box className="mt-12 px-10">
          <Carousel
            maw="100%"
            onMouseEnter={autoplay.current.reset}
            onMouseLeave={autoplay.current.reset}
            slideSize="25%"
            slideGap="lg"
            loop
            withControls={false}
            plugins={[autoplay.current]}
            align="start"
            slidesToScroll={1}
          >
            {ads.map((item, index) => (
              <Carousel.Slide
                key={index}
                className="border-[white] w-full flex justify-center"
              >
                <GeneralCoursesAds item={item} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </BackgroundImage>
    </BackgroundImage>
  );
}
