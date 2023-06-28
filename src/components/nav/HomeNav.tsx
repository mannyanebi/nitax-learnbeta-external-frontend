import React from "react";
import NavElement from '../custom/NavElement'
import Logo from "../brand/Logo";
import { useDisclosure } from '@mantine/hooks';
import { Box, Flex, Text, Modal,  Burger, UnstyledButton } from "@mantine/core";
import Link from "next/link";

const HomeNav = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <React.Fragment>
      <Box className="w-full bg-white z-50 top-0 sticky">
        <NavElement className="w-full max-w-[65rem] xl:max-w-[80rem] 2xl:max-w-[85rem] mx-auto bg-white h-[70px] px-4 sm:px-8 md:px-10 md:border-none border-b-2 border-[#E2E2E2]">
          <Flex className="items-center h-full justify-between">
            <Box>
              <Link href='/'>
                <Logo />
              </Link>
            </Box>

            <Burger
              className="md:hidden"
              size='md'
              color="#FAA61A"
              opened={opened}
              onClick={toggle}
            />

            <Box className="hidden md:block">
              <Flex className="items-center space-x-3 font-bold">
                <Link href='/auth/signin'>
                  <UnstyledButton className="bg-transparent hover:bg-[#014340] py-3 w-32 rounded-full hover:shadow-sm text-center hover:text-white transition duration-75 delay-[40ms] ease-linear">
                    Sign in
                  </UnstyledButton>
                </Link>

                <Link href='/auth/signup'>
                  <UnstyledButton className="bg-[#014340] hover:bg-[#014340de] py-3 w-32 rounded-full hover:shadow-sm text-center text-white transition duration-75 delay-[40ms] ease-linear">
                    Sign up
                  </UnstyledButton>
                </Link>

                <Link className="hidden" href='/dashboard/overview'>
                  <UnstyledButton className="bg-[#014340] hover:bg-[#014340de] py-3 w-40 rounded-full hover:shadow-sm text-center text-white transition duration-75 delay-[40ms] ease-linear">
                    Dashboard
                  </UnstyledButton>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </NavElement>
      </Box>

      <Modal 
        opened={opened} 
        onClose={toggle}
        fullScreen
        withCloseButton={false}
        transitionProps={{ transition: 'fade', duration: 200 }}
        padding={0}
      >
        <NavElement className="w-full max-w-[90rem] mx-auto sticky bg-white top-0 h-[70px] px-4 sm:px-6 lg:px-8 md:border-none border-b-2 border-[#E2E2E2]">
          <Flex className="items-center h-full justify-between">
            <Box>
              <Link href='/dashboard/overview'>
                <Logo />
              </Link>
            </Box>

            <Burger
              size='md'
              color="#FAA61A"
              opened={opened}
              onClick={toggle}
            />
          </Flex>  
        </NavElement>

        <Flex className="justify-center flex-col mt-10
         space-y-6">
          <Box className="mx-auto">
            <Link href='/auth/signin'>
              <UnstyledButton style={{ border: '1px solid #014340' }} className="bg-transparent hover:bg-[#014340] text-[#014340] py-3 w-60 rounded-full hover:shadow-sm text-center hover:text-white transition duration-75 delay-[40ms] ease-linear">
                Sign in
              </UnstyledButton>
            </Link>
          </Box>

          <Box className="mx-auto">
            <Link href='/auth/signup'>
              <UnstyledButton style={{ border: '1px solid #014340' }} className="bg-[#014340] hover:bg-[#014340de] py-3 w-60 rounded-full hover:shadow-sm text-center text-white transition duration-75 delay-[40ms] ease-linear">
                Sign up
              </UnstyledButton>
            </Link>
          </Box>

          <Box className="mx-auto">
            <Link className="hidden" href='/dashboard/overview'>
              <UnstyledButton className="bg-[#014340] hover:bg-[#014340de] py-3 w-40 rounded-full hover:shadow-sm text-center text-white transition duration-75 delay-[40ms] ease-linear">
                Dashboard
              </UnstyledButton>
            </Link>
          </Box>
        </Flex>
      </Modal>
    </React.Fragment>
  )
}

export default HomeNav