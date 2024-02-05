import React from "react";
import account from "../assets/images/icons/profile.svg";
import serach from "../assets/images/icons/search.svg";
import { Nav } from "./Temp.style";

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <span>Movie</span>xd.
      </h1>
      <article>
        <img src={account} alt="accountImg" />
        <p>JEKO10</p>
      </article>
      <div>
        <input type="text" />
        <img src={serach} alt="serachImg" />
      </div>
      <article>
        <button>Log in</button>
        <button>Sign up</button>
      </article>
    </Nav>
  );
};

export default Navbar;
