import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import HeadInfo from '../components/headinfo'
import Index from '../components/index'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <HeadInfo />
      <main>
        <Navbar />
        <Index />
      </main>
      
    </div>
  )
}

export default Home
