import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Films from "./pages/Films";
import SingleMovie from "./pages/SingleMovie";
import Watchlist from "./pages/Watchlist";
import Lists from "./pages/Lists";
import Reviews from "./pages/Reviews";
import Likes from "./pages/Likes";
import Error from "./pages/Error";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/reviews",
    element: Reviews,
  },
  {
    path: "/likes",
    element: Likes,
  },
  {
    path: "/watchlist",
    element: Watchlist,
  },
  {
    path: "/films",
    element: Films,
  },
  {
    path: "/lists",
    element: Lists,
  },
  {
    path: "/singeMovie",
    element: SingleMovie,
  },
  {
    path: "/*",
    element: Error,
  },
];

export default routes;
