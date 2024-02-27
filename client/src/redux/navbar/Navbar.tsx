import React, { useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/images/icons/arrow.svg";
import account from "../../assets/images/icons/profile.svg";
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
import { setIsLogOpen } from "./navbarSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLogOpen, inputValue, isMovieModalOpen } = useAppSelector(
    (store) => store.navbar
  );
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
      <LogButton onClick={() => dispatch(setIsLogOpen(true))}>Log +</LogButton>
      <InputContainer>
        <Input value={isLogOpen || isMovieModalOpen ? "" : inputValue} />
      </InputContainer>
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
