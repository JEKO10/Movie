import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/images/icons/arrow.svg";
import account from "../../assets/images/icons/profile.svg";
import search from "../../assets/images/icons/search.svg";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Underline } from "../singleMovie/SingleMovie.styled";
import {
  Input,
  LogButton,
  Nav,
  ProfileHeader,
  ProfileMenu,
  ProfileModal
} from "./Navbar.styled";
import {
  searchMovies,
  setInputValue,
  setIsModalOpen as setIsSearchOpen
} from "./navbarSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
    dispatch(searchMovies());
  };

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
          <img src={account} alt="accountImg" />
          <p>JEKO10</p>
          <img src={arrow} alt="arrow" />
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
      <LogButton>Log +</LogButton>
      <Input>
        <input
          type="text"
          value={inputValue}
          ref={inputRef}
          placeholder="Enter movie title..."
          onChange={handleInputChange}
          onClick={() => dispatch(setIsSearchOpen(true))}
        />
        <img src={search} alt="searchImg" />
      </Input>
      <article>
        <button>Log in</button>
        <button>Sign up</button>
      </article>
    </Nav>
  );
};

export default Navbar;

// const [isVisible, setIsVisible] = useState(true);
// const [scrollTop, setScrollTop] = useState(0);

// useEffect(() => {
//   const handleScroll = () => {
//     const newScrollTop =
//       window.pageYOffset || document.documentElement.scrollTop;

//     if (newScrollTop > scrollTop) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }

//     setScrollTop(newScrollTop);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, [scrollTop]);

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
