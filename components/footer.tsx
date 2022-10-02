import Image from "next/image"
import Link from "next/link"

import youtubeLogo from "../public/icons8-youtube.svg"
import twitterLogo from "../public/icons8-twitter.svg"
import githubLogo from "../public/icons8-github.svg"

const Footer = () => {
  return (
    <footer className="container flex flex-col px-6 mx-auto space-y-0 bg-white m-6 ">
      <div className="justify-between">
        <ul className="list-disc">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/artworks">
              Artworks
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <div className="mb-6 mx-auto md:w-1/2 md:mx-0">
          <div className="flex space-x-2 my-3 mx-auto md:mx-0">
            <a href="https://www.youtube.com/channel/UClXWVfHTOeGPznaPYspWqeQ">
              <Image src={youtubeLogo} alt="YouTube" width={36} height={36} />
            </a>
            <a href="https://twitter.com/shimiiy0113">
              <Image src={twitterLogo} alt="Twitter" width={36} height={36} />
            </a>
            <a href="https://github.com/Shimiiy">
              <Image src={githubLogo} alt="Github" width={36} height={36} />
            </a>
          </div>
          <Link href="/contact">
            <a className="font-bold text-center p-6 py-3 text-white rounded-2xl bg-orangeShim hover:bg-orangeShimLighter">
              Contact Me!
            </a>
          </Link>
        </div>
      </div>
      <h1>© SHIMIIY.DEV 2022</h1>
      <h2>Social Media Icons provided by Icons8</h2>
    </footer>
  )
}

export default Footer