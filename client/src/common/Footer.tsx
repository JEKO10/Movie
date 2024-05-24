import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Footer as Container } from "../assets/style/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Link to={"/"}>
        <h1>
          <span>Movie</span>xd
        </h1>
      </Link>
      <ul>
        <li>Log in</li>
        <li>Sign up</li>
        <li>Films</li>
        <li>Members</li>
        <li>Journal</li>
      </ul>
      <article>
        <FaInstagram />
        <FaXTwitter />
        <FaFacebook />
        <FaThreads />
      </article>
    </Container>
  );
};

export default Footer;
