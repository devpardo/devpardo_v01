import Footer from "../Footer/Footer";
import "./Contact.css";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <>
      <Element
        name="contact"
        className="contact w-full h-screen bg-[#0c001e] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#29459e]">
              Lets talk!
            </h1>
            <p className="text-[#8892b0] py-4 text-sm lg:text-base">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-3 rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-3 bg-[#ccd6f6] rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded-lg"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>

          <button className="bg-[#471598] lg:px-3 px-2 py-3 rounded-xl mt-5 text-white text-center hover:bg-[#9659fb]">
            Send Message
          </button>
        </form>
      </Element>
      <Footer></Footer>
    </>
  );
};

export default Contact;
