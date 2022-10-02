import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import HeadInfo from '../components/headinfo'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import ProjectHighlights from '../components/projectsIndex'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-b from-blueTintBlack to-[#0B6085]'>
      <HeadInfo />
      <main>
        <Navbar />
        <Hero />
        <ProjectHighlights /> 
      </main>
    </div>
  )
}

export default Home
