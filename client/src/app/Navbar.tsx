import React, { useState } from "react";
import account from "../assets/images/icons/profile.svg";
import serach from "../assets/images/icons/search.svg";
import arrow from "../assets/images/icons/arrow.svg";
import { Nav } from "./Temp.style";
import { ProfileMenu, ProfileModal } from "../assets/style/Navbar.styled";
import { Underline } from "../assets/style/SingleMovie.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Nav>
      <h1>
        <span>Movie</span>xd
      </h1>
      <article>
        <img src={account} alt="accountImg" />
        <p>JEKO10</p>
        <img src={arrow} alt="arrow" />
      </article>
      <ProfileMenu>
        Profile
        {isModalOpen && (
          <ProfileModal isModalOpen={isModalOpen}>
            <li>Profile</li>
            <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/profile/films">Films</Link>
            </li>
            <li>
              <Link to="/profile/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/profile/likes">Likes</Link>
            </li>
            <li>
              <Link to="/profile/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/profile/lists">Lists</Link>
            </li>
            <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
            <li>
              <Link to="/profile/settings">Settings</Link>
            </li>
            <li>
              <Link to="/">Sign Out</Link>
            </li>
          </ProfileModal>
        )}
      </ProfileMenu>
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
