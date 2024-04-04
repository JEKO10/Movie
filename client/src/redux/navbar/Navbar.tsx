import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import Input from "./components/Input";
import ProfileMenu from "./components/ProfileMenu";
import { Input as InputContainer, LogButton, Nav } from "./Navbar.styled";
import { setIsLogInOpen, setIsLogOpen, setIsSignUpOpen } from "./navbarSlice";

const Navbar = () => {
  const { isLogOpen, inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <Nav>
      <Link to={"/"}>
        <h1>
          <span>Movie</span>xd
        </h1>
      </Link>
      <LogButton onClick={() => dispatch(setIsLogOpen(true))}>Log +</LogButton>
      <ProfileMenu />
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
