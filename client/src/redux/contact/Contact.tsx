import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import contactImg from "../../assets/images/contact.jpg";
import { useAppDispatch } from "../../common/hooks";
import { setQuery } from "../navbar/navbarSlice";
import { ContactForm, ContactPage, ContactPoster } from "./Contact.styled";

const Contact = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
        },
        (error: { text: string }) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactPage>
      <h2>Contact Moviexd</h2>
      <article>
        <ContactPoster>
          <Link to="/movie/686">
            <img src={contactImg} alt="contactImg" />
          </Link>
        </ContactPoster>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <label>
            Your name
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Your email address
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Your message
            <textarea
              cols={30}
              rows={5}
              placeholder="Your message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button type="submit">Send</button>
        </ContactForm>
      </article>
    </ContactPage>
  );
};

export default Contact;

// useEffect(() => {
//   dispatch(setQuery(""));
// }, []);
