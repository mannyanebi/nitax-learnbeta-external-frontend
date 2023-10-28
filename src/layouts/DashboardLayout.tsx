import React, { useEffect, useContext } from "react";
import { Toaster } from "react-hot-toast";
import PageLayout from "./PageLayout";
import { Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "@/components/nav/SideNav";
import TopNav from "@/components/nav/TopNav";
import AppLayout from "./AppLayout";
import { UserContext } from "@/contexts/UserContext";
import EnrollGradeModal from "@/components/onboarding/EnrollGradeModal";

type Props = { children: React.ReactNode };

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const userEnrolled = user?.data?.student?.grade_level_name;
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!userEnrolled) {
      open();
    }
  }, [open, userEnrolled]);

  return (
    <PageLayout>
      <AppLayout>
        <Toaster position="bottom-right" reverseOrder={false} />

        <Box className="hidden md:block">
          <SideNav />
        </Box>

        <Box className="md:ml-[12.6rem]">
          <TopNav />

          <Box className="pb-20">{children}</Box>
        </Box>

        <EnrollGradeModal opened={opened} close={close} />
      </AppLayout>
    </PageLayout>
  );
};

export default DashboardLayout;
