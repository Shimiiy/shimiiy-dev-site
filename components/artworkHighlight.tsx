import Box from "./box"
import monikaPic from "../public/monichannelart.png"

import Image from "next/image"
import ArtworkButton from "./buttons/artworkButton"

const ArtworkHighlight = () => {
  return (
    <section className="bg-gradient-to-b from-[#EBFE7A] to-[#DD8029]">
      <div className="hidden md:block artwork-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="pt-20" />
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto py-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-16 mx-auto md:w-full md:mx-0 md:mb-32">
          <h1 className="font-bold text-4xl text-blueTintBlack mb-8">
            Artwork Highlights
          </h1>
          <Box>
            <div className="md:mr-6 mx-auto">
              <Image src={monikaPic} alt="Shimiiy Placeholder" width={720} height={420}/>
            </div>
            <div>
              <h2 className="font-semibold text-3xl py-4 text-left">Sakura Monika</h2>
              <h3 className="font-regular">Publish Date: 2020/04/29</h3>
              <div className="flex flex-row space-x-2 py-2 items-baseline">
                <h3 className="font-regular text-lg text-left">Made with:</h3>
                <p className="font-semibold">Blender,</p>
                <p className="font-semibold">Photoshop</p>
              </div>
              <div className="font-light">
                <p>My previous works were made solely on Source Filmmaker.</p>
                <p>As university life started, I figured it was a good time to turn over a new leaf with my choice of 3DCG software.</p>
                <p>And so, I made a poster using Blender&apos;s Cycle render engine.</p>
                <p>The SSS(Sub-surface Scattering) could use some improvement, but overall it was a good practice of Blender.</p>
                <u>Monika Model made by Moyonote</u>
              </div>
              <div className="font-bold my-4">
                <p>This is <span className="text-blue-400">the only artwork I&apos;ve published</span> at the moment! Expect more to come.</p>
                <div className="my-6 mx-auto">
                  <ArtworkButton linkAddress="/artworks">See other artworks</ArtworkButton>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default ArtworkHighlight