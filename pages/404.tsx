import Image from "next/image"
import Head from "next/head"

import Footer from "../components/footer"
import Navbar from "../components/navbar"

import PlantingImage from "../public/syokujyu_syokurin.png"
import Link from "next/link"

export default function Custom404() {
  return (
    <div>
      <Navbar />
      <main className="container flex items-center px-6 mx-auto bg-slate-700 rounded-lg py-16">
        <Head>
          <title>404 - Page not found!</title>
          <meta charSet='UTF-8'/>
          <meta name="description" content="Shimiiy's portfolio." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex mx-auto h-full flex-col md:flex-row p-6 w-full items-center text-white">
          <div className="p-6 mx-16">
            <Image src={PlantingImage} alt="Planting Image" width={270} height={300} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl my-3">404 - Page Not Found!</h1>
            <hr />
            <div className="my-6">
              <p>If you were searching for these pages:</p>
              <ul className="p-6 font-medium">
                <li>About Me</li>
                <li>Projects</li>
                <li>Artworks</li>
                <li>Blog</li>
              </ul>
              <p><span className="font-medium text-red-500">They&apos;re still in development and not ready yet!</span> Sorry for the inconvinience!</p>
              <p className="pt-6 font-semibold">In the meantime, please check out this site&apos;s <a 
                href="https://github.com/Shimiiy/shimiiy-dev-site" 
                className="underline text-sky-300 font-semibold hover:text-sky-500"
              >GitHub repository</a></p>
              <p className="font-semibold">to keep track of development!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}