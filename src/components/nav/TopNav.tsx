import React from "react";
import NavElement from "../custom/NavElement";
import Logo from "../brand/Logo";
import Image from "next/image";
import noProfile from "../../assets/imgs/no_profile.png";
import { useDisclosure } from "@mantine/hooks";
import { Box, Flex, Text, Burger } from "@mantine/core";
import { SideNavDrawer } from "./SideNavDrawer";
import Link from "next/link";

// types and state
import { get_user_profile } from "@/services/user";
import { useAppDispatch, useAppSelector } from "@/store";

const TopNav = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(({ profile }) => profile.profile);
  const show = useAppSelector(({ profile }) => profile.show);

  const [opened, { toggle }] = useDisclosure(false);

  const onLoad = React.useCallback(() => {
    get_user_profile(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <React.Fragment>
      <NavElement className="w-full sticky bg-white top-0 h-[56px] md:bg-[#F4F4F9] z-50 px-4 sm:px-8 md:pl-8 md:pr-14 lg:pr-20 border-b-2 border-[#E2E2E2]">
        <Flex className="items-center h-full justify-between md:justify-end">
          <Box className="md:hidden">
            <Link href="/dashboard/overview">
              <Logo />
            </Link>
          </Box>

          <Burger
            className="md:hidden"
            size="md"
            color="#FAA61A"
            opened={opened}
            onClick={toggle}
          />

          <Box className="hidden md:block">
            <Flex className="items-center space-x-2 font-bold">
              <Link href="/profile">
                <Image
                  className="rounded-full"
                  width={40}
                  height={40}
                  alt="profile icon"
                  src={noProfile}
                />
              </Link>

              <Text>{show ? "Student" : profile?.data?.name}</Text>
            </Flex>
          </Box>
        </Flex>
      </NavElement>

      <SideNavDrawer opened={opened} close={toggle} />
    </React.Fragment>
  );
};

export default TopNav;
