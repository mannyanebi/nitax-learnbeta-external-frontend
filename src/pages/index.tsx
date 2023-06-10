import React from 'react'
import PageLayout from '@/layouts/PageLayout'
import Head from 'next/head'
import HomeNav from '@/components/nav/HomeNav'

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Learn Beta | Home</title>
      </Head>

      <HomeNav />

    </PageLayout>
  )
}
