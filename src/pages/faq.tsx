import React from "react";
import Head from "next/head";
import PageLayout from "@/layouts/PageLayout";
import HomeNav from "@/components/nav/HomeNav";
import Footer from "@/components/landing/Footer";
import faqs from "@/constants/faqs";
import {
  BackgroundImage,
  Box,
  Text,
  Flex,
  UnstyledButton,
  Collapse,
  Divider,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import bg_hero from "../../assets/svgs/bg_yellow.svg";
import bg_light_blue from "../../assets/svgs/bg_light_blue.svg";

const ServiceTerms = () => {
  const [index, indexSet] = React.useState<number>(0);
  const [faq, setFaq] = React.useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <PageLayout>
      <Head>
        <title>LearnBeta | FAQ</title>
      </Head>

      <HomeNav />

      <div className="bg-[#D7EDFB29] w-full md:px-10 md:py-14 px-4 py-6">
        <div className="bg-[#00433F] py-10">
          <h1 className="text-[white] text-center md:text-[60px] sm:text-[20px] font-bold font-monteserat">
            FAQ
          </h1>
        </div>
        <div className="bg-[white] md:py-10 py-4 px-4 w-full">
          {faqs.map((item) => (
            <>
              <Box
                key={item.id}
                className={`px-5 py-4 my-4 bg-[#ffffff] text-[#333333] transition duration-75 ease-linear border-2 rounded-md border-black`}
              >
                <Flex className="justify-between items-center">
                  <Text className="font-semibold">{item.question}</Text>

                  <Box>
                    <UnstyledButton
                      onClick={() => {
                        if (index !== 0 && item.id === index) indexSet(0);
                        else indexSet(item.id);
                      }}
                    >
                      <Icon
                        icon="majesticons:plus"
                        color="#00433F"
                        width="24"
                        height="24"
                      />
                    </UnstyledButton>
                  </Box>
                </Flex>
              </Box>
              <div
                className={`mt-4 bg-[#00433F] text-[white] px-5 py-4 my-4 transition duration-500 ease-linear border-2 rounded-md border-black ${
                  item.id === index ? "block" : "hidden"
                }`}
              >
                <p className="font-bold mb-3">{item.question}</p>
                <div className="border-[1px]" />
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </PageLayout>
  );
};

export default ServiceTerms;
