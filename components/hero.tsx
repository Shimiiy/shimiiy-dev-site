import Box from "./box"
import ContactButton from "./buttons/contactButton"

import Image from "next/image"
import Link from "next/link"

import shimPlaceholderPic from "../public/shim_placeholder.png"
import shimRotateGIF from "../public/shimRotateTransparent.gif"
import youtubeLogo from "../public/icons8-youtube.svg"
import twitterLogo from "../public/icons8-twitter.svg"
import githubLogo from "../public/icons8-github.svg"

const Hero = () => {
  return (
    // Flex Container
    <div className="container flex flex-col md:flex-row items-center px-6 mx-auto py-10 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-16 mx-auto md:w-1/2 md:mx-0 md:mb-32">
        <h1 className="max-w-md text-white text-4xl font-bold text-center mb-8 md:text-5xl md:text-left">Hi, I&apos;m <span className="text-yellowShim">Shimiiy</span></h1> {/* ' escaped: I&apos;m Shimiiy = I'm Shimiiy */}
        <p className="text-white text-center md:text-left">I&apos;m a computer science student at <span className="text-green-400">SIT</span> in Tokyo.</p>
        <p className="text-white text-center md:text-left">I also make <u>3D artworks</u> as a hobby.</p>
        <div className="flex space-x-2 mt-3 mx-auto md:mx-0">
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
        <div className="my-6 mx-auto md:mx-0">
          <Link href="/#sendEmail">
            <a className="font-bold text-center p-6 py-3 text-white rounded-2xl bg-orangeShim hover:bg-orangeShimLighter">
              Contact Me!
            </a>
          </Link>
        </div>
      </div>
      <div>
        <Image src={shimRotateGIF} alt="Shimiiy Placeholder" width={960} height={540}/>
      </div>
    </div>
  )
}

// Icons by Icons8, remember to add this on footer

export default Hero
