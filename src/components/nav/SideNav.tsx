import React, { useState, useEffect, useContext } from "react";
import { BackgroundImage, Box, Center, Flex, Text } from "@mantine/core";
import Logo from "../brand/Logo";
import noProfile from "../../assets/imgs/no_profile.png";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import upgrade_banner from "../../assets/svgs/upgrade_banner.svg";
import { UserContext } from "@/contexts/UserContext";

const PremiumBanner = () => {
  return (
    <BackgroundImage className="p-5 rounded-xl" src={upgrade_banner.src}>
      <Text className="font-bold text-white">Get more off LearnBeta</Text>

      <Box className="text-center mt-10">
        <Link
          href="/profile?tab=subscriptions"
          className="text-white font-semibold text-xs hover:underline"
        >
          Upgrade Plan
        </Link>
      </Box>
    </BackgroundImage>
  );
};

type Props = { mobile?: boolean };

const SideNav: React.FC<Props> = ({ mobile }) => {
  const { user } = useContext(UserContext);

  mobile = mobile ? mobile : false;

  const [activePage, setActivePage] = useState({
    overview: false,
    subjects: false,
  });

  useEffect(() => {
    const page = window.location.href.split("/").pop();

    if (page === "overview") {
      setActivePage({
        ...activePage,
        overview: true,
      });
    }

    if (page === "subjects") {
      setActivePage({
        ...activePage,
        subjects: true,
      });
    }
  }, []);

  const linkData = [
    {
      text: "Dashboard",
      linkTarget: "/dashboard/overview",
      activePage: activePage.overview,
      icon: "radix-icons:dashboard",
    },

    {
      text: "Subjects",
      linkTarget: "/dashboard/subjects",
      activePage: activePage.subjects,
      icon: "jam:document",
    },
  ];

  return (
    <Box className="w-full max-w-[12.6rem] h-[100vh] fixed overflow-y-auto bg-[#00433F]">
      <Box className="h-full">
        <Box className={`${mobile && "hidden"}`}>
          <Center className="w-full h-[56px]">
            <Link href="/dashboard/overview">
              <Logo variant="white" />
            </Link>
          </Center>
        </Box>

        <Box className={`${mobile ? "mt-6" : "mt-14"} space-y-4`}>
          {linkData.map((linkDatum, i) => (
            <NavLink
              key={i}
              icon={linkDatum.icon}
              text={linkDatum.text}
              linkTarget={linkDatum.linkTarget}
              activePage={linkDatum.activePage}
            />
          ))}

          {mobile && (
            <Box className="max-w-[8rem] !mt-10 w-full mx-auto">
              <Link href="/profile">
                <Flex className="items-center space-x-[6px] font-bold">
                  <Image
                    className="rounded-full"
                    width={18}
                    height={18}
                    alt="profile icon"
                    src={noProfile}
                  />

                  <Text className="truncate font-bold text-white">
                    {user.data.student.name}
                  </Text>
                </Flex>
              </Link>
            </Box>
          )}

          {(!user.data?.student?.subscription ||
            user.data.student.subscription.is_expired) && (
            <Box className="px-6 absolute bottom-[15%]">
              <PremiumBanner />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
