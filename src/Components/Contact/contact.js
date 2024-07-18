import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  SubmitButton,
  ContactHeading,
  ThankMsg,
} from "../../styles/App.css";
import "../../index.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success("Mail sent successfully!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_624w145",
        "template_aqqks57",
        form.current,
        "Fh2Hzl85sIL1-3_of"
      )
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
    setSubmitted(true);
  };

  return (
    <>
      <ContactContainer>
        {!submitted ? (
          <>
            <ContactHeading className="home-container">
              Get in touch using the form
            </ContactHeading>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                required
                placeholder="Your Name"
                id="name"
                type="text"
                value={name}
                className="contact-form"
                name="user_name"
                onChange={(e) => {
                  setName(e.target.value);
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
                value={message}
                className="contact-form"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

              <SubmitButton
                type="submit"
                onClick={ValidationMessage}
                className="home-button"
              >
                Submit
              </SubmitButton>
            </form>
          </>
        ) : (
          <>
            <ThankMsg className="home-container">
              <p>Thank you for your message!</p>
              <NavLink to="/">
                <button className="home-button">Back to Home</button>
              </NavLink>
            </ThankMsg>
          </>
        )}
      </ContactContainer>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop={false}
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        draggable
        theme="dark"
      />
    </>
  );
};

export default Contact;
