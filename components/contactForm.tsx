const ContactForm = () => {
  return (
    <section className="bg-gradient-to-b from-blueTintBlack to-[#0B6085]">
      <div className="contact-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="pt-20" />
      <h1>Send me an email</h1>
      <form action="">
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name"></input><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" name="email"></input><br />
        <label htmlFor="message">Message</label><br />
        <input type="message" id="message" name="message"></input><br />
        <input type="submit" value="Submit"></input>      
        </form>
    </section>
  )
}

export default ContactForm