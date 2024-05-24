import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
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
        <FaXTwitter />
        <FaInstagram />
        <FaFacebook />
      </article>
    </footer>
  );
};

export default Footer;
