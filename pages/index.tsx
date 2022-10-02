import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'

import HeadInfo from '../components/headinfo'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import ProjectHighlights from '../components/projectHighlight'
import ArtworkHighlights from '../components/artworkHighlight'
import ContactForm from '../components/contactForm'

const Home: NextPage = () => {
  return (
    <div>
      <HeadInfo />
      <main>
        <Navbar />
        <div className='bg-gradient-to-b from-blueTintBlack to-[#0B6085]'>
          <Hero />
        </div>
        <ProjectHighlights /> 
        <ArtworkHighlights />
        <ContactForm />
      </main>
    </div>
  )
}

export default Home
