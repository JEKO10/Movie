import React, { useEffect } from "react";

import { ContactPage } from "../../assets/style/Contact.styled";
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
    </ContactPage>
  );
};

export default Contact;
