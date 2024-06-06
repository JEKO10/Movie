import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import Input from "./components/Input";
import ProfileMenu from "./components/ProfileMenu";
import {
  Input as InputContainer,
  LogButton,
  MenuButton,
  Nav,
} from "./Navbar.styled";
import { setIsLogInOpen, setIsLogOpen, setIsSignUpOpen } from "./navbarSlice";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { isLogOpen, inputValue } = useAppSelector((store) => store.navbar);
  const { isLoggedIn, isFavoriteOpen } = useAppSelector(
    (store) => store.profile
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Nav>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <Link to={"/"}>
        <h1>
          <span>Movie</span>xd
        </h1>
      </Link>
      <InputContainer>
        <Input value={isLogOpen || isFavoriteOpen ? "" : inputValue} />
        <FaSearch
          onClick={() => inputValue && navigate(`/search/${inputValue}`)}
        />
      </InputContainer>
      {isLoggedIn && (
        <LogButton onClick={() => dispatch(setIsLogOpen(true))}>
          Log +
        </LogButton>
      )}
      <ProfileMenu />
      {/* {isLoggedIn && (
        <article>
          <button onClick={() => dispatch(setIsLogInOpen(true))}>Log in</button>
          <button onClick={() => dispatch(setIsSignUpOpen(true))}>
            Sign up
          </button>
        </article>
      )} */}
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
    </Nav>
  );
};

export default Navbar;
