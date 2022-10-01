import Box from "./box"
import ContactButton from "./buttons/contactButton"
import shimPlaceholderPic from "../public/shim_placeholder.png"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    // Flex Container
    <div className="container flex flex-row items-center px-6 mx-auto pt-10 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 mx-auto md:w-1/2 md:mx-0">
        <h1 className="max-w-md text-white text-4xl font-bold text-center mb-8 md:text-5xl md:text-left">Hi, I&apos;m <span className="text-yellowShim">Shimiiy</span></h1> {/* ' escaped: I&apos;m Shimiiy = I'm Shimiiy */}
        <p className="text-white text-center md:text-left">I&apos;m a computer science student at <span className="text-green-400">SIT</span> in Tokyo.</p>
        <p className="text-white text-center md:text-left">I also make <u>3D artworks</u> as a hobby.</p>
        <div className="my-8 mx-auto md:w-1/2 md:mx-0">
          <Link href="/contact">
            <a className="text-center p-5 py-3 text-white rounded-2xl bg-orangeShim hover:bg-orangeShimLighter">
              Contact Me!
            </a>
          </Link>
        </div>
        {/* <Image src={shimPlaceholderPic} alt="Shimiiy Placeholder"/> */}
      </div>
    </div>
  )
}

export default Hero
