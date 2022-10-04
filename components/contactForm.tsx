const ContactForm = () => {
  return (
    <section className="bg-gradient-to-b from-blueTintBlack to-[#0B6085]">
      <div className="contact-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="pt-20" /> {/* This div is here to prevent the text being covered by the curves */}
      <div className="container px-12 mx-auto py-10 space-y-0 md:space-y-0">
        <h1 className="font-bold text-4xl text-white md:mr-6">Send me an email</h1>
        <form action="" className="text-white">
          <div className="flex flex-col md:flex-row py-6 justify-between">
            <div className="w-full md:w-1/2 md:pr-6 pb-6">
              <label htmlFor="name">Name</label><br />
              <input type="text" id="name" name="name" placeholder="John Smith" className="rounded-lg w-full mb-3 text-black text-left p-2"></input><br />
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" name="email" placeholder="johnsmith@email.com" className="rounded-lg w-full text-black p-2"></input><br />
            </div>
            <div className="w-full md:w-1/2 md:pl-6">
              <label htmlFor="message">Message</label><br />
              <textarea id="message" name="message" rows={5} cols={33} className="rounded-lg w-full mb-6 text-black p-2"></textarea><br />
              <input type="submit" value="Send Email" className="font-bold text-center p-6 py-3 text-white rounded-2xl bg-orangeShim hover:bg-orangeShimLighter"></input>      
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm