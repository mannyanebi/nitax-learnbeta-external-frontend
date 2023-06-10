import React from "react";
import Head from "next/head";
import { Box, Tabs } from "@mantine/core";
import PageLayout from "@/layouts/PageLayout";
import ProfileNav from "@/components/nav/ProfileNav";
import ProfileBanner from "@/components/profile/ProfileBanner";

const Profile = () => {
  return (
    <PageLayout>
      <Head>
        <title>Profile</title>
      </Head>

      <ProfileNav />

      <Box className='mt-5 lg:mt-8 mb-20'>
        <Tabs
          unstyled
          defaultValue="profile"
          styles={(theme) => ({
            tab: {
              ...theme.fn.focusStyles(),
              color: '#777777',
              cursor: 'pointer',
              paddingLeft: '20px',
              paddingRight: '20px',
              fontFamily: "Montserrat Variable, sans-serif",
              fontSize: theme.fontSizes.sm,
              display: 'flex',
              alignItems: 'center',

              '&[data-active]': {
                backgroundColor: 'white',
                borderColor: 'white',
                fontWeight: 600,
                color: '#FAA61A',
                borderRadius: '9999px',
                boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }
            },

            tabsList: {
              display: 'flex',
              backgroundColor: '#F4F4F4',
              borderRadius: '9999px',
              padding: '5px',
              height: '60px'
            },
          })}
        >
          <Box className="p-1 w-fit mx-auto">
            <Tabs.List>
              <Tabs.Tab value="profile">
                Profile
              </Tabs.Tab>

              <Tabs.Tab value="subscriptions">
                Subscriptions
              </Tabs.Tab>
            </Tabs.List>
          </Box>

          <Tabs.Panel className="mt-5" value="profile" pt="xs">
            <ProfileBanner />
          </Tabs.Panel>

          <Tabs.Panel className="mt-5" value="subscriptions" pt="xs">
            fhbjkdnvl
          </Tabs.Panel>
        </Tabs>
      </Box>
    </PageLayout>
  )
}

export default Profile