const ContactForm = () => {
  return (
    <div className="flex-row mb-[100px] gap-y-4">
      <h2 className="text-center">Contact</h2>
      <p className="text-center">Let's connect. Send me a message.</p>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <form>
          <div>
            <label>Your Name</label>
            <input
              className="border flex"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label>Email Address</label>
            <input className="flex border" type="email" placeholder="Email" />
          </div>

          <div className="">
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
