const ContactForm = () => {
  return (
    <div className="items-center justify-center mb-[100px] ">
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Let's connect. Send me a message.</p>
      <div className="">
        <form>
          <div>
            <label>Your Name</label>
            <input
              className="flex border"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label>Email Address</label>
            <input className="flex border" type="email" placeholder="Email" />
          </div>

          <div>
            <label>Your Message</label>
            <input
              className="border flex h-10"
              type="text"
              placeholder="Your Name"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
