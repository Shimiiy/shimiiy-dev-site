import React from "react";

import Link from "next/link"
import Image from "next/image";
import ContactButton from "./buttons/contactButton";
import logo from '../public/shim_logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="relative container mx-auto p-6 bg-white md:rounded-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 w-56 mx-auto md:mx-0">
          <Image src={logo} alt='icon' layout="responsive"/>
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link href="/">
            Home
          </Link>
          <Link href="/about-me">
            About Me
          </Link>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/artworks">
            Artworks
          </Link>
          <Link href="/blog">
            Blog
          </Link>
        </div>
        {/* Button */}
        <ContactButton linkAddress="/contact">
          Contact Me!
        </ContactButton>
        {/* Hamburger Menu */}
        <div>

        </div>
      </div>
    </nav>
    
  )
}

export default Navbar