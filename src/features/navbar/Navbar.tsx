import logo from "../../assets/images/logo.png";
import { setQuery } from "./navbarSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link } from "react-router-dom";
import { Nav } from "../../assets/style/Navbar.style";
import React from "react";

const Navbar = () => {
  const { query } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const setClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    dispatch(setQuery(event.currentTarget.text));
  };

  return (
    <Nav
      style={{
        backgroundColor:
          query === "singleMovie"
            ? "rgba(19, 24, 28, 0)"
            : "rgba(19, 24, 28, 1)",
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link
            to={"/profile"}
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
        <li>
          <Link
            to={"/reviews"}
            onClick={(event) => setClicked(event)}
            className={query === "Reviews" ? "active" : ""}
          >
            Reviews
          </Link>
        </li>
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
          <Link to={"/"} onClick={(event) => setClicked(event)}>
            Search for movies
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
