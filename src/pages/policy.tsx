import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Center, Text, BackgroundImage } from "@mantine/core";
import bgImage from "../assets/svgs/bg_objects.svg";
import preview_subject from "../assets/svgs/empty_state.svg";
import PageLayout from "@/layouts/PageLayout";
import HomeNav from "@/components/nav/HomeNav";
import Footer from "@/components/landing/Footer";
import { disclaimer, policy } from "@/constants/policy";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Privacy Policy</title>
      </Head>

      <HomeNav />

      <div className="bg-[#D7EDFB29] w-full md:px-10 md:py-14 px-4 py-6">
        <div className="bg-[#00433F] py-10">
          <h1 className="text-[white] text-center md:text-[60px] sm:text-[20px] font-bold font-monteserat">
            Privacy Policy
          </h1>
          <p className="text-[#D9D9D9] text-center md:font-semibold md:text-[25px] sm:font-bold sm:text-[15px] font-monteserat">
            Last updated October 14th 2023
          </p>
        </div>
        <div className="bg-[white] md:px-8 md:py-10 py-4 px-4">
          <p className="text-[#014340] font-monteserat font-semibold text-[13px]">
            Privacy Policy
          </p>
          {policy.header.map((item, _) => (
            <p key={_} className="text-[#696984] [&>*]:py-2 text-[11.5px] my-2">
              {item}
            </p>
          ))}

          <div className="px-4 md:px-8">
            <ul className="text-[#696984] text-[11.5px] my-2 list-disc">
              {policy.body.map((item, _) => (
                <li key={_}>{item}</li>
              ))}
            </ul>
          </div>

          {policy.footer.map((item, _) => (
            <div
              key={_}
              className="text-[#696984] [&>*]:py-2 text-[11.5px] my-2"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}

          {/* Diclaimer */}
          <div>
            <p className="text-[#014340] font-monteserat font-semibold text-[13px]">
              Disclaimer
            </p>
            <div
              className="text-[#696984] [&>*]:py-2 text-[11.5px]"
              dangerouslySetInnerHTML={{ __html: disclaimer }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </PageLayout>
  );
};

export default PrivacyPolicy;
