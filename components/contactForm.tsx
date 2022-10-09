import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Retrieve IDs from env
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (serviceID && templateID && userID && form.current) {  {/* やっつけで実装、動くかなぁ… */}
      emailjs.sendForm(serviceID, templateID, form.current, userID)
    }
  }

  return (
    <section id="sendEmail" className="bg-gradient-to-b from-blueTintBlack to-[#0B6085]">
      <div className="contact-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="pt-20" /> {/* This div is here to prevent the text being covered by the curves */}
      <div className="container px-12 mx-auto py-10 space-y-0 md:space-y-0">
        <h1 className="font-bold text-4xl text-white md:mr-6 py-3">Send me an email</h1>
        <p className="text-white font-light">
          Interested in my works?
          <br />
          Send me a quick message by filling up the form below!
          <br />
          I also accept messages through <span className="underline">social media.</span>
        </p>
        {/* Form */}
        <form ref={form} className="text-white">
          <div className="flex flex-col md:flex-row py-6 justify-between">
            <div className="w-full md:w-1/2 md:pr-6 pb-6">
              <label htmlFor="from_name">Name</label><br />
              <input type="text" id="from_name" name="from_name" placeholder="John Smith" className="rounded-lg w-full mb-3 text-black text-left p-2" required></input><br />
              <label htmlFor="from_email">Email</label><br />
              <input type="email" id="from_email" name="from_email" placeholder="johnsmith@email.com" className="rounded-lg w-full text-black p-2" required></input><br />
            </div>
            <div className="w-full md:w-1/2 md:pl-6">
              <label htmlFor="message">Message</label><br />
              <textarea id="message" name="message" rows={5} cols={33} className="rounded-lg w-full mb-6 text-black p-2" required></textarea><br />
              <button type="submit" className="font-bold text-center p-6 py-3 text-white rounded-2xl bg-orangeShim hover:bg-orangeShimLighter">Send Email</button>      
            </div>
          </div>
        </form>
        {/* Form End */}
      </div>
    </section>
  )
}

export default ContactForm