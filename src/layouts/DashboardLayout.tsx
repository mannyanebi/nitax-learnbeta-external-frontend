import React from "react";
import PageLayout from "./PageLayout";
import { Box } from '@mantine/core'
import SideNav from '@/components/nav/SideNav'
import TopNav from '@/components/nav/TopNav'
import AppLayout from "./AppLayout";

type Props = { children: React.ReactNode }

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <PageLayout>
      <AppLayout>
        <Box className="hidden md:block">
          <SideNav />
        </Box>

        <Box className="md:ml-[12.6rem]">
          <TopNav />

          <Box className="pb-20">
            {children}
          </Box>
        </Box>
      </AppLayout>
    </PageLayout>
  )
}

export default DashboardLayout