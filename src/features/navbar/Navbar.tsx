import logo from "../../assets/images/logo.png";
import { setQuery } from "./navbarSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { query } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const setClicked = (e) => {
    dispatch(setQuery(e.currentTarget.textContent));
  };

  return (
    <nav
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
            onClick={(e) => setClicked(e)}
            className={query === "Profile" ? "active" : ""}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/films"}
            onClick={(e) => setClicked(e)}
            className={query === "Films" ? "active" : ""}
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            to={"/likes"}
            onClick={(e) => setClicked(e)}
            className={query === "Likes" ? "active" : ""}
          >
            Likes
          </Link>
        </li>
        <li>
          <Link
            to={"/lists"}
            onClick={(e) => setClicked(e)}
            className={query === "Lists" ? "active" : ""}
          >
            Lists
          </Link>
        </li>
        <li>
          <Link
            to={"/reviews"}
            onClick={(e) => setClicked(e)}
            className={query === "Reviews" ? "active" : ""}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            to={"/watchlist"}
            onClick={(e) => setClicked(e)}
            className={query === "Watchlist" ? "active" : ""}
          >
            Watchlist
          </Link>
        </li>
        <li>
          <Link to={"/"} onClick={(e) => setClicked(e)}>
            Search for movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
