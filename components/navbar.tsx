import React from "react";

import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <nav className="text-3xl font-serif bg-sky-800 text-white p-4">
      <ul className="flex space-x-10">
        <li>
          <Link href="/">
            <a>Shimiiy / シミー</a>
          </Link>
        </li>
        <li>About Me</li>
        <li>Works</li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar