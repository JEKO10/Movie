import Collection from "../features/discoverMovies/components/Collection";
import DiscoverMovies from "../features/discoverMovies/DiscoverMovies";
import PersonInfo from "../features/personInfo/PersonInfo";
import SingleMovie from "../features/singleMovie/SingleMovie";
import Error from "../pages/Error";
import Films from "../pages/Films";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Lists from "../pages/Lists";
import Profile from "../pages/Profile";
import Reviews from "../pages/Reviews";
import Watchlist from "../pages/Watchlist";

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
    path: "/discover/:id/:name",
    element: DiscoverMovies,
  },
  {
    id: 10,
    path: "/collection/:id/:name",
    element: Collection,
  },
  {
    id: 11,
    path: "/*",
    element: Error,
  },
];

export default routes;
