import Box from "./box"

const Hero = () => {
  return (
    // Flex Container
    <div className="container flex items-center px-6 mx-auto pt-10 bg-gradient-to-b from-blueTintBlack to-[#0B6085] space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 md:w-1/2 mx-auto md:mx-0">
        <h1 className="max-w-md text-white text-4xl font-bold text-center mb-8 md:text-5xl md:text-left">Hi, I&apos;m <span className="text-yellowShim">Shimiiy</span></h1> {/* ' escaped: I&apos;m Shimiiy = I'm Shimiiy */}
        <p className="text-white text-center md:text-left">I&apos;m a computer science student at <span className="text-green-400">SIT</span> in Tokyo.</p>
        <p className="text-white text-center md:text-left">I also make <u>3D artworks</u> as a hobby.</p>
      </div>
    </div>
  )
}

export default Hero
