import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import HeadInfo from '../components/headinfo'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <HeadInfo />
      <main>
        <Navbar />
        <Hero />
      </main>
      
    </div>
  )
}

export default Home
