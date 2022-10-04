import Image from "next/image"
import Link from "next/link"

import youtubeLogo from "../public/icons8-youtube.svg"
import twitterLogo from "../public/icons8-twitter.svg"
import githubLogo from "../public/icons8-github.svg"

const Footer = () => {
  return (
    <footer className="container flex flex-col m-6 px-6 md:px-32 mx-auto space-y-6 bg-white">
      <div className="flex justify-between">
        <ul className="list-disc mx-6">
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
        <div className="m-6 mt-0 flex flex-col">
          <div className="flex space-x-6 my-3 mx-auto md:mx-0">
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
      <div className="flex mx-auto flex-col items-center">
        <h1>© SHIMIIY.DEV 2022</h1>
        <h2>Social Media Icons provided by Icons8</h2>
      </div>
    </footer>
  )
}

export default Footer