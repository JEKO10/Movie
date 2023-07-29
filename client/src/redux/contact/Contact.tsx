import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import contactImg from "../../assets/images/contact.jpg";
import {
  ContactForm,
  ContactPage,
  ContactPoster,
} from "../../assets/style/Contact.styled";
import { useAppDispatch } from "../../common/hooks";
import { setQuery } from "../navbar/navbarSlice";

const Contact = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
  }, []);

  return (
    <ContactPage>
      <h2>Contact Moviexd</h2>
      <article>
        <ContactPoster>
          <Link to="/movie/686">
            <img src={contactImg} alt="contactImg" />
          </Link>
        </ContactPoster>
        <ContactForm>
          <label>
            Your name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Your email address
            <input type="email" placeholder="Enter your email address" />
          </label>
          <label>
            Your message
            <textarea cols={30} rows={5} placeholder="Your message"></textarea>
          </label>
          <button type="submit">Send</button>
        </ContactForm>
      </article>
    </ContactPage>
  );
};

export default Contact;
