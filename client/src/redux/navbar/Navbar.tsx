import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Underline } from "../singleMovie/SingleMovie.styled";
import Input from "./components/Input";
import {
  Input as InputContainer,
  LogButton,
  Nav,
  ProfileHeader,
  ProfileMenu,
  ProfileModal
} from "./Navbar.styled";
import { setIsLogInOpen, setIsLogOpen, setIsSignUpOpen } from "./navbarSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLogOpen, inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const onLinkChange = () => {
    setIsModalOpen(false);
  };

  return (
    <Nav>
      <Link to={"/"}>
        <h1>
          <span>Movie</span>xd
        </h1>
      </Link>
      <ProfileMenu>
        <ProfileHeader onClick={() => setIsModalOpen(!isModalOpen)}>
          <CgProfile />
          <p>JEKO10</p>
          <IoIosArrowDown />
        </ProfileHeader>
        {isModalOpen && (
          <ProfileModal isModalOpen={isModalOpen}>
            <li onClick={onLinkChange}>
              <Link to="/profile">Profile</Link>
            </li>
            <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
            <li onClick={onLinkChange}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/profile/films">Films</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/profile/reviews">Reviews</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/profile/likes">Likes</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/profile/watchlist">Watchlist</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/profile/lists">Lists</Link>
            </li>
            <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
            <li onClick={onLinkChange}>
              <Link to="/profile/settings">Settings</Link>
            </li>
            <li onClick={onLinkChange}>
              <Link to="/">Sign Out</Link>
            </li>
          </ProfileModal>
        )}
      </ProfileMenu>
      <LogButton onClick={() => dispatch(setIsLogOpen(true))}>Log +</LogButton>
      <InputContainer>
        <Input value={isLogOpen ? "" : inputValue} />
        <FaSearch />
      </InputContainer>
      <article>
        <button onClick={() => dispatch(setIsLogInOpen(true))}>Log in</button>
        <button onClick={() => dispatch(setIsSignUpOpen(true))}>Sign up</button>
      </article>
    </Nav>
  );
};

export default Navbar;
