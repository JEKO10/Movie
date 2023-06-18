import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { IconWrapper, Input, Nav } from "../../assets/style/Navbar.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import {
  searchMovies,
  setInputValue,
  setIsSearchOpen,
  setQuery,
} from "./navbarSlice";

const Navbar = () => {
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

  useEffect(() => {
    if (isSearchOpen) {
      dispatch(setInputValue(""));
    }
  }, [isSearchOpen]);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
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
      <ul>
        <li>
          <Link
            to={"/account"}
            onClick={(event) => setClicked(event)}
            className={query === "Profile" ? "active" : ""}
          >
            Profile
          </Link>
        </li>
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
      </ul>
    </Nav>
  );
};

export default Navbar;
