import React from "react";

import { FixedNavMenu as Container } from "../assets/style/FixedNavMenu.styled";
import { LogButton } from "../redux/navbar/Navbar.styled";
import {
  setIsLogInOpen,
  setIsLogOpen,
  setIsSignUpOpen,
} from "../redux/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const FixedNavMenu = () => {
  const { isLoggedIn } = useAppSelector((store) => store.profile);
  const dispatch = useAppDispatch();

  return (
    <Container>
      {isLoggedIn && (
        <LogButton onClick={() => dispatch(setIsLogOpen(true))}>
          Log +
        </LogButton>
      )}
      <ul>
        {!isLoggedIn && (
          <li onClick={() => dispatch(setIsLogInOpen(true))}>Log in</li>
        )}
        {!isLoggedIn && (
          <li onClick={() => dispatch(setIsSignUpOpen(true))}>Sign up</li>
        )}
        <li>Films</li>
        <li>Members</li>
        {!isLoggedIn && <li>Journal</li>}
      </ul>
    </Container>
  );
};

export default FixedNavMenu;
