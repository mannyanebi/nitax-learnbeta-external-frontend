import React from "react";
import Head from "next/head";
import PageLayout from "@/layouts/PageLayout";
import HomeNav from "@/components/nav/HomeNav";
import Footer from "@/components/landing/Footer";
import { terms, conditions } from "@/constants/terms_and_condition";

const ServiceTerms = () => {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Terms & Policy</title>
      </Head>

      <HomeNav />

      <div className="bg-[#D7EDFB29] w-full md:px-10 md:py-14 px-4 py-6">
        <div className="bg-[#00433F] py-10">
          <h1 className="text-[white] text-center md:text-[60px] sm:text-[20px] font-bold font-monteserat">
            Terms of Service
          </h1>
          <p className="text-[#D9D9D9] text-center md:font-semibold md:text-[30px] sm:font-bold sm:text-[15px] font-monteserat">
            Last updated October 14th 2023
          </p>
        </div>
        <div className="bg-[white] md:px-8 md:py-10 py-4 px-4">
          {terms.map((term) => (
            <div key={term.id}>
              <p className="text-[#014340] font-monteserat font-semibold text-[13px]">
                {term.id}. {term.title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: term.description }}
                className="text-[#696984] [&>*]:py-2 text-[11.5px]"
              />
            </div>
          ))}
          <div>
            <ul className="text-[#014340] font-monteserat font-semibold text-[13px] list-disc">
              <li className="text-[#014340] font-monteserat font-semibold">
                {conditions.title}
              </li>
            </ul>
            <ol className="list-decimal text-[11.5px] text-[#696984]">
              {conditions.numbered.map((item, _) => (
                <li key={_}>{item}</li>
              ))}
            </ol>
            <ol className="list-disc text-[11.5px] text-[#696984]">
              {conditions.bullet.map((item, _) => (
                <li key={_}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </PageLayout>
  );
};

export default ServiceTerms;
