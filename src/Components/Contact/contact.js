import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  ContactContainer,
  SubmitButton,
  ContactHeading,
} from "../../styles/App.css";
import "../../index.css";

const Contact = () => {
  const form = useRef();
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setname] = useState("");
  function verifyEmail(email) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }
  const ValidationMessage = () => {
    if (!name || !message || !validEmail) {
      toast.error("Please fill in all the fields", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success("Mail sent successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_624w145", "template_aqqks57", form.current, {
      publicKey: "Fh2Hzl85sIL1-3_of",
    });
    console.log("emailsent");
  };
  return (
    <ContactContainer>
      <ContactHeading className="home-container">
        Get in touch using the form
      </ContactHeading>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          required
          placeholder="Your Name"
          id="name"
          type="text"
          className="contact-form"
          name="user_name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          required
          placeholder="Email"
          id="email"
          type="email"
          name="email_form"
          className="contact-form"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          className="contact-form"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <SubmitButton type="submit" onClick={ValidationMessage}>
          Submit
        </SubmitButton>
      </form>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop={false}
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ContactContainer>
  );
};

export default Contact;
