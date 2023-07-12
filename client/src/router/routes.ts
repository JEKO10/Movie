import ScrollToTop from "../common/ScrollTop";
import Account from "../pages/Account";
import Error from "../pages/Error";
import Films from "../pages/Films";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Watchlist from "../pages/Watchlist";
import Collection from "../redux/discoverMovies/components/Collection";
import DiscoverMovies from "../redux/discoverMovies/DiscoverMovies";
import Lists from "../redux/lists/Lists";
import PersonInfo from "../redux/personInfo/PersonInfo";
import Profile from "../redux/profile/Profile";
import Reviews from "../redux/reviews/Reviews";
import SingleMovie from "../redux/singleMovie/SingleMovie";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "/account",
    element: Account,
  },
  {
    id: 2,
    path: "/profile",
    element: Profile,
  },
  {
    id: 3,
    path: "/reviews",
    element: Reviews,
  },
  {
    id: 4,
    path: "/likes",
    element: Likes,
  },
  {
    id: 5,
    path: "/watchlist",
    element: Watchlist,
  },
  {
    id: 6,
    path: "/films",
    element: Films,
  },
  {
    id: 7,
    path: "/lists",
    element: Lists,
  },
  {
    id: 8,
    path: "/movie/:id",
    element: SingleMovie,
  },
  {
    id: 9,
    path: "/person/:id",
    element: PersonInfo,
  },
  {
    id: 10,
    path: "/discover/:id/:name",
    element: DiscoverMovies,
  },
  {
    id: 11,
    path: "/collection/:id/:name",
    element: Collection,
  },
  {
    id: 12,
    path: "/*",
    element: Error,
  },
  {
    id: 13,
    path: "/*",
    element: ScrollToTop,
  },
];

export default routes;
