import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import {
  IconWrapper,
  Input,
  Nav,
  NavMenu,
  ProfileMenu,
  ProfileModal,
} from "../../assets/style/Navbar.styled";
import { Underline } from "../../assets/style/SingleMovie.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import {
  searchMovies,
  setInputValue,
  setIsSearchOpen,
  setQuery,
} from "./navbarSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { query, isSearchOpen, inputValue } = useAppSelector(
    (store) => store.navbar
  );
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const setClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    dispatch(setQuery(event.currentTarget.text));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
    dispatch(searchMovies());
  };

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  useEffect(() => {
    if (isSearchOpen) {
      dispatch(setInputValue(""));
    }
  }, [isSearchOpen]);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
    setIsModalOpen(false);
  }, [query]);

  const clickOutside = (e: MouseEvent) => {
    if (!inputRef.current?.contains(e.target as Node)) {
      dispatch(setIsSearchOpen(true));
    } else {
      dispatch(setIsSearchOpen(false));
    }
  };

  return (
    <Nav query={query}>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <NavMenu>
        <ProfileMenu onMouseEnter={handleMouseEnter}>
          Profile
          {isModalOpen && (
            <ProfileModal
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isModalOpen={isModalOpen}
            >
              <li>Profile</li>
              <Underline margin="0" />
              <li>Home</li>
              <li>Profile</li>
              <li>Films</li>
              <li>Reviews</li>
              <li>Likes</li>
              <li>Watchlist</li>
              <li>Lists</li>
              <Underline margin="0" />
              <li>Settings</li>
              <li>Sign Out</li>
            </ProfileModal>
          )}
        </ProfileMenu>
        <li>
          <Link
            to={"/films"}
            onClick={(event) => setClicked(event)}
            className={query === "Films" ? "active" : ""}
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            to={"/likes"}
            onClick={(event) => setClicked(event)}
            className={query === "Likes" ? "active" : ""}
          >
            Likes
          </Link>
        </li>
        <li>
          <Link
            to={"/lists"}
            onClick={(event) => setClicked(event)}
            className={query === "Lists" ? "active" : ""}
          >
            Lists
          </Link>
        </li>
        {/* <li>
          <Link
            to={"/reviews"}
            onClick={(event) => setClicked(event)}
            className={query === "Reviews" ? "active" : ""}
          >
            Reviews
          </Link>
        </li> */}
        <li>
          <Link
            to={"/watchlist"}
            onClick={(event) => setClicked(event)}
            className={query === "Watchlist" ? "active" : ""}
          >
            Watchlist
          </Link>
        </li>
        <li>
          <IconWrapper onClick={() => dispatch(setIsSearchOpen(isSearchOpen))}>
            {isSearchOpen ? <VscChromeClose /> : <FaSearch />}
          </IconWrapper>
          <Input
            ref={inputRef}
            isSearchOpen={isSearchOpen}
            value={inputValue}
            type="text"
            placeholder="Enter movie title..."
            onChange={handleInputChange}
          />
        </li>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

{
  /* <Link
            to={"/account"}
            onClick={(event) => setClicked(event)}
            className={query === "Profile" ? "active" : ""}
          > */
}
{
  /* </Link> */
}
