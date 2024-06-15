import React, { useState } from "react";

import { FixedNavMenu as Container } from "../assets/style/FixedNavMenu.styled";
import {
  setIsLogInOpen,
  setIsLogOpen,
  setIsSignUpOpen
} from "../redux/navbar/navbarSlice";
import { Underline } from "../redux/singleMovie/SingleMovie.styled";
import { useAppDispatch, useAppSelector } from "./hooks";

const FixedNavMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isLoggedIn, registerInfo } = useAppSelector((store) => store.profile);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <ul>
        {isLoggedIn && (
          <li onClick={() => setIsProfileOpen(!isProfileOpen)}>JEKO</li>
        )}
        {isProfileOpen && (
          <ul>
            <li>Profile</li>
            <Underline margin="5px 0 5px 0" width="100%" />
            <li>Home</li>
            <li>Films</li>
            <li>Reviews</li>
            <li>Likes</li>
            <li>Watchlist</li>
            <li>Lists</li>
            <li>Settings</li>
            <Underline margin="5px 0 5px 0" width="100%" />
            <li>Sign Out</li>
          </ul>
        )}
        {isLoggedIn && (
          <li onClick={() => dispatch(setIsLogOpen(true))}>Log +</li>
        )}
        {!isLoggedIn && (
          <li onClick={() => dispatch(setIsLogInOpen(true))}>Log in</li>
        )}
        {!isLoggedIn && (
          <li onClick={() => dispatch(setIsSignUpOpen(true))}>Sign up</li>
        )}
        <li>Films</li>
        <li>Members</li>
        <li>Journal</li>
      </ul>
    </Container>
  );
};

export default FixedNavMenu;
