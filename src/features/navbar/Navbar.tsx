import logo from "../../assets/images/logo.png";
import { setQuery } from "./navbarSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Navbar = () => {
  const { query } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li
          className={query === "Profile" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Profile
        </li>
        <li
          className={query === "Films" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Films
        </li>
        <li
          className={query === "Likes" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Likes
        </li>
        <li
          className={query === "Lists" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Lists
        </li>
        <li
          className={query === "Reviews" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Reviews
        </li>
        <li
          className={query === "Watchlist" ? "active" : ""}
          onClick={(e) => dispatch(setQuery(e.currentTarget.textContent))}
        >
          Watchlist
        </li>
        <li>Search for movies</li>
      </ul>
    </nav>
  );
};

export default Navbar;
