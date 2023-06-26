import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { Element } from "react-scroll";
import axios from "axios";
import { useState } from "react";
//https://getform.io/f/29598246-f133-4af3-b6fc-8f3ebe9942ab
const Contact = () => {
  interface FormInputs {
    name: string;
    email: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [formResponse, setformResponse] = useState(false);

  const onSubmit = (data: FormInputs) => {
    axios
      .post("https://getform.io/f/29598246-f133-4af3-b6fc-8f3ebe9942ab", data, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        if (response.data.success) {
          setformResponse(true);

          reset({
            name: "",
            email: "",
            message: "",
          });
        }

        setTimeout(() => {
          setformResponse(false);
        }, 10000);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <Element
        name="contact"
        className="contact w-full h-screen bg-[#0c001e] flex justify-center items-center p-4"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
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

          {formResponse && (
            <div className="mb-3 bg-green-700 p-2 text-white rounded-sm">
              Message Sent, I will get back to you the soonest!
            </div>
          )}

          <input
            className="bg-[#ccd6f6] p-3 rounded-lg mb-3"
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            name="name"
          />
          <p className="m-0 text-sm text-red-500 mb-3">
            {errors.name?.message?.toString()}
          </p>

          <input
            className="p-3 bg-[#ccd6f6] rounded-lg mb-3"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
            })}
            type="email"
            placeholder="Email"
            name="email"
          />
          <p className="m-0 text-sm text-red-500 mb-3">
            {errors.email?.message?.toString()}
          </p>

          <textarea
            className="bg-[#ccd6f6] p-2 rounded-lg mb-3"
            {...register("message", {
              required: "Message is required",
            })}
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <p className="m-0 text-sm text-red-500 mb-3">
            {errors.message?.message?.toString()}
          </p>

          <button
            type="submit"
            className="bg-[#471598] lg:px-3 px-2 py-3 rounded-xl mt-5 text-white text-center hover:bg-[#9659fb]"
          >
            Send Message
          </button>
        </form>
      </Element>
      <Footer></Footer>
    </>
  );
};

export default Contact;
