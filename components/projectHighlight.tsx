import Box from "./box"
import shimPlaceholderPic from "../public/shim_placeholder.png"

import Image from "next/image"
import ProjectButton from "./buttons/projectButton"

const ProjectHighlights = () => {
  return (
    <section className="bg-gradient-to-b from-[#7AFEDE] to-[#29B2DD]">
      <div className="hidden md:block project-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="pt-20" />
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto py-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-16 mx-auto md:mx-0 md:mb-32">
          <h1 className="font-bold text-4xl text-blueTintBlack mb-8">
            Project Highlights
          </h1>
          <Box>
            <div className="md:mr-6 mx-auto">
              <Image src={shimPlaceholderPic} alt="Shimiiy Placeholder" width={400} height={400}/>
            </div>
            <div>
              <h2 className="font-semibold text-3xl py-4 text-left">Shimiiy.dev</h2>
              <div className="flex flex-row space-x-2 pb-2 items-baseline">
                <h3 className="font-regular text-lg text-left">Made with:</h3>
                <p className="font-semibold">React(Next.js),</p>
                <p className="font-semibold">TypeScript,</p>
                <p className="font-semibold">Tailwind CSS</p>
              </div>
              <div className="font-light">
                <p>I wrote this website as a testimonial of my web design/coding skills.</p>
                <p>In the future, I wish to utilise React&apos;s state system to the fullest, and sprinkle some 3DCG magic I learnt from my YouTube career for <u>Shimiiy.dev</u>.</p>
                <h4 className="font-semibold my-2 text-lg">Things I want to implement</h4>
                <ul className="mx-4 list-disc">
                  <li>Project database</li>
                  <li>Artwork database</li>
                  <li>Interactable 3D avatar in hero section</li>
                  <li>My own blog</li>
                  <li>Japanese support/日本語対応</li>
                </ul>
              </div>
              <div className="font-bold my-4">
                <p>This is <span className="text-blue-400">the only project I&apos;ve published</span> at the moment! Expect more to come.</p>
                <div className="my-6 mx-auto">
                  <ProjectButton linkAddress="/projects">See other projects</ProjectButton>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default ProjectHighlights