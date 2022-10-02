import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row items-center px-6 mx-auto space-y-0 bg-white m-6 ">
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
    </footer>
  )
}

export default Footer