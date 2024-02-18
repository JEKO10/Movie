import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import contactImg from "../../assets/images/contact.jpg";
import { ContactForm, ContactPage, ContactPoster } from "./Contact.styled";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result: { text: string }) => {
          console.log(result.text);
        },
        (error: { text: string }) => {
          console.error("Email sending failed:", error.text);
        }
      );
    } else {
      console.error("Form reference is null or undefined.");
    }
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
              name="from_name"
              value={name}
              placeholder="Enter your name"
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Your email address
            <input
              type="email"
              name="email_id"
              value={email}
              placeholder="Enter your email address"
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
            />
          </label>
          <label>
            Your message
            <textarea
              cols={30}
              rows={5}
              placeholder="Your message"
              onChange={(event) => setMessage(event.target.value)}
              name="message"
              value={message}
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
