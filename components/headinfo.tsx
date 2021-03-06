import React from "react"
import Head from 'next/head'

const HeadInfo: React.FunctionComponent = () => {
  return (
    <Head>
      <title>Shimiiy / シミー</title>
      <meta charSet='UTF-8'/>
      <meta name="description" content="Shimiiy's portfolio. Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadInfo