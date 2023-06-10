import React from "react";
import '@fontsource-variable/montserrat';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterTransition } from "@/components/nav/RouterTransition";
import UserProvider from '@/providers/UserProvider'

type Props = { children: React.ReactNode }

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Montserrat Variable, sans-serif",
            colorScheme: 'light',
          }}
        >
          <UserProvider>
            <RouterTransition />
            {children}
          </UserProvider>
        </MantineProvider>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default Providers