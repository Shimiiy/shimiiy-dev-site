import React, { useState } from "react";

import Link from "next/link"
import Image from "next/image";
import ContactButton from "./buttons/contactButton";
import logo from '../public/shim_logo.svg';
import {Slant as Hamburger} from "hamburger-react";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="relative container mx-auto p-6 bg-white md:rounded-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 w-56 mx-auto md:mx-0">
          <Image src={logo} alt='icon' layout="responsive"/>
        </div>
        <div className="hidden space-x-3 lg:space-x-9 md:flex">
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
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar