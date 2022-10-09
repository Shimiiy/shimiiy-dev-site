import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Custom404() {
  return (
    <div>
      <Navbar />
      <main className="container flex items-center px-6 mx-auto">
        <div className="flex mx-auto h-80 p-6">
          <h1 className="font-bold text-2xl">404 - Page Not Found</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}