import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.scss";
import { ThemeContext } from "../../context";

function Contact() {
  const [completed, setCompleted] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rcu1b49",
        "template_jemwgbs",
        formRef.current,
        "user_DyjKgs0X4pQsxz1LrUBZe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setCompleted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +91 79770 76107
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              maxagno3@yahoo.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              New Panvel, Maharashtra, India
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
            />
            <button type="submit">Submit</button>
            {completed && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
