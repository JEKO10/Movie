import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Films from "../pages/Films";
import Watchlist from "../pages/Watchlist";
import Lists from "../pages/Lists";
import Reviews from "../pages/Reviews";
import Likes from "../pages/Likes";
import SingleMovie from "../features/singleMovie/SingleMovie";
import PersonInfo from "../features/personInfo/PersonInfo";
import Error from "../pages/Error";
import GenreMovies from "../features/genreMovies/GenreMovies";
import KeywordMovies from "../features/keywords/KeywordMovies";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "/profile",
    element: Profile,
  },
  {
    id: 2,
    path: "/reviews",
    element: Reviews,
  },
  {
    id: 3,
    path: "/likes",
    element: Likes,
  },
  {
    id: 4,
    path: "/watchlist",
    element: Watchlist,
  },
  {
    id: 5,
    path: "/films",
    element: Films,
  },
  {
    id: 6,
    path: "/lists",
    element: Lists,
  },
  {
    id: 7,
    path: "/movie/:id",
    element: SingleMovie,
  },
  {
    id: 8,
    path: "/person/:id",
    element: PersonInfo,
  },
  {
    id: 9,
    path: "/movie/genre/:id/:name",
    element: GenreMovies,
  },
  { id: 10, path: "/movie/theme/:id/:name", element: KeywordMovies },
  {
    id: 11,
    path: "/*",
    element: Error,
  },
];

export default routes;
