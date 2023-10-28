import React from "react";
import NavElement from "../custom/NavElement";
import Logo from "../brand/Logo";
import Image from "next/image";
import noProfile from "../../assets/imgs/no_profile.png";
import { useDisclosure } from "@mantine/hooks";
import { Box, Flex, Text, Burger } from "@mantine/core";
import { SideNavDrawer } from "./SideNavDrawer";
import Link from "next/link";

import { get_user_profile } from "@/services/user";
import { useAppDispatch, useAppSelector } from "@/store";

const ProfileNav = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ profile }) => profile.profile);
  const loading = useAppSelector(({ profile }) => profile.show);

  const [opened, { toggle }] = useDisclosure(false);

  const onLoad = React.useCallback(() => {
    get_user_profile(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <React.Fragment>
      <NavElement className="w-full border-b-2 bg-white border-[#E2E2E2] sticky top-0 z-[100] h-[56px] md:bg-[#F4F4F9] px-4 sm:px-8 md:px-10">
        <Flex className="items-center max-w-[40rem] lg:max-w-[62rem] xl:max-w-[65rem] mx-auto h-full justify-between">
          <Link href="/dashboard/overview">
            <Logo />
          </Link>

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

              <Text>{loading ? "Student" : user?.data?.name}</Text>
            </Flex>
          </Box>
        </Flex>
      </NavElement>

      <SideNavDrawer opened={opened} close={toggle} />
    </React.Fragment>
  );
};

export default ProfileNav;
