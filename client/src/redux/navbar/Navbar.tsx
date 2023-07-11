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
  NavMenuItem,
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
  const [isVisible, setIsVisible] = useState(false);
  const { query, isSearchOpen, inputValue } = useAppSelector(
    (store) => store.navbar
  );
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  let theEnd = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > theEnd) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      theEnd = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Nav query={query} isVisible={isVisible}>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <NavMenu>
        <NavMenuItem active={false}>
          <ProfileMenu onMouseEnter={() => setIsModalOpen(true)}>
            Profile
            {isModalOpen && (
              <ProfileModal
                onMouseEnter={() => setIsModalOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsModalOpen(false);
                  }, 500);
                }}
                isModalOpen={isModalOpen}
              >
                <li>Profile</li>
                <Underline
                  margin="5px -20px 5px -5px"
                  width="calc(100% + 25px)"
                />
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
                <Underline
                  margin="5px -20px 5px -5px"
                  width="calc(100% + 25px)"
                />
                <li>
                  <Link to="/profile/settings">Settings</Link>
                </li>
                <li>Sign Out</li>
              </ProfileModal>
            )}
          </ProfileMenu>
        </NavMenuItem>
        <NavMenuItem active={query === "Films"}>
          <Link to={"/films"} onClick={(event) => setClicked(event)}>
            Films
          </Link>
        </NavMenuItem>
        <NavMenuItem active={query === "Likes"}>
          <Link to={"/likes"} onClick={(event) => setClicked(event)}>
            Likes
          </Link>
        </NavMenuItem>
        <NavMenuItem active={query === "Lists"}>
          <Link to={"/lists"} onClick={(event) => setClicked(event)}>
            Lists
          </Link>
        </NavMenuItem>
        <NavMenuItem active={query === "Watchlist"}>
          <Link to={"/watchlist"} onClick={(event) => setClicked(event)}>
            Watchlist
          </Link>
        </NavMenuItem>
        <NavMenuItem active={false}>
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
        </NavMenuItem>
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

{
  /* <li>
          <Link
            to={"/reviews"}
            onClick={(event) => setClicked(event)}
            className={query === "Reviews" ? "active" : ""}
          >
            Reviews
          </Link>
        </li> */
}
