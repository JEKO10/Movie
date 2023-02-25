import { useState } from "react";
import logo from "../assets/images/log.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li>Profile</li>
        <li>Films</li>
        <li>Likes</li>
        <li>Lists</li>
        <li>Reviews</li>
        <li>Watchlist</li>
        <li>Search for movies</li>
      </ul>
    </nav>
  );
};

export default Navbar;
