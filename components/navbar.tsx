import React from "react";

import Link from "next/link"
import Image from "next/image";
import logo from '../public/shim_logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 w-56 mx-auto md:mx-0">
          <Image src={logo} alt='icon' layout="responsive"/>
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link href="/">
            About Me
          </Link>
          <Link href="/">
            Works
          </Link>
          <Link href="/">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar