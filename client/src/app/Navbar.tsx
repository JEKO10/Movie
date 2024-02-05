import React from "react";
import account from "../assets/images/icons/profile.svg";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <span>Movie</span>xd.
      </h1>
      <article>
        <img src={account} alt="accountImg" />
        <p>JEKO10</p>
      </article>
      <input type="text" />
      <article>
        <button>Log in</button>
        <button>Sign up</button>
      </article>
    </nav>
  );
};

export default Navbar;
