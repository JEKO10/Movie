import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Films from "../pages/Films";
import SingleMovie from "../pages/SingleMovie";
import Watchlist from "../pages/Watchlist";
import Lists from "../pages/Lists";
import Reviews from "../pages/Reviews";
import Likes from "../pages/Likes";
import Error from "../pages/Error";

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
    path: "/singeMovie",
    element: SingleMovie,
  },
  {
    id: 8,
    path: "/*",
    element: Error,
  },
];

export default routes;
