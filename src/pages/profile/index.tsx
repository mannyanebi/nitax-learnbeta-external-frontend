import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { UserContext } from "@/contexts/UserContext";
import { Box, Tabs } from "@mantine/core";
import PageLayout from "@/layouts/PageLayout";
import ProfileNav from "@/components/nav/ProfileNav";
import ProfileBanner from "@/components/profile/ProfileBanner";
import Subscriptions from "@/components/subscription/Subscriptions";
import AppLayout from "@/layouts/AppLayout";
import { useMutation, useQuery } from "react-query";
import {
  getGradeLevelSubjects,
  getSubscribedSubjects,
} from "@/services/subjects";
import AddSubjectModal from "@/components/subscription/AddSubjectsModal";
import { useDisclosure } from "@mantine/hooks";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState<string | null>("profile");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("tab")) {
      const tabValue = params.get("tab");
      setActiveTab(tabValue);
    }
  }, []);

  return (
    <PageLayout>
      <AppLayout>
        <Head>
          <title>Profile</title>
        </Head>

        <ProfileNav />

        <Box className="mt-5 lg:mt-8 mb-20">
          <Tabs
            unstyled
            value={activeTab}
            onTabChange={setActiveTab}
            styles={(theme) => ({
              tab: {
                ...theme.fn.focusStyles(),
                color: "#777777",
                cursor: "pointer",
                paddingLeft: "20px",
                paddingRight: "20px",
                justifyContent: "center",
                fontFamily: "Montserrat Variable, sans-serif",
                fontSize: theme.fontSizes.sm,
                display: "flex",
                alignItems: "center",
                width: "170px",

                "&[data-active]": {
                  backgroundColor: "white",
                  borderColor: "white",
                  fontWeight: 600,
                  color: "#FAA61A",
                  borderRadius: "9999px",
                  boxShadow:
                    "0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                },
              },

              tabsList: {
                display: "flex",
                backgroundColor: "#F4F4F4",
                borderRadius: "9999px",
                padding: "5px",
                height: "50px",
              },
            })}
          >
            <Box className="p-1 w-fit mx-auto">
              <Tabs.List>
                <Tabs.Tab value="profile">Profile</Tabs.Tab>

                <Tabs.Tab value="subscriptions">Subscriptions</Tabs.Tab>
              </Tabs.List>
            </Box>

            <Tabs.Panel className="mt-5" value="profile" pt="xs">
              <ProfileBanner />
            </Tabs.Panel>

            <Tabs.Panel className="mt-5" value="subscriptions" pt="xs">
              <Subscriptions />
            </Tabs.Panel>
          </Tabs>
        </Box>
      </AppLayout>
    </PageLayout>
  );
};

export default Profile;
