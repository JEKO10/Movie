import ScrollToTop from "../common/ScrollTop";
import Error from "../pages/Error";
import Films from "../pages/Films";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Search from "../pages/search/Search";
import Watchlist from "../pages/Watchlist";
import Contact from "../redux/contact/Contact";
import Collection from "../redux/discoverMovies/components/Collection";
import DiscoverMovies from "../redux/discoverMovies/DiscoverMovies";
import Lists from "../redux/lists/Lists";
import PersonInfo from "../redux/personInfo/PersonInfo";
import Profile from "../redux/profile/Profile";
import Settings from "../redux/profile/settings/Settings";
import User from "../redux/profile/User";
import Reviews from "../redux/reviews/Reviews";
import SingleMovie from "../redux/singleMovie/SingleMovie";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home
  },
  {
    id: 1,
    path: "/profile",
    element: Profile
  },
  {
    id: 2,
    path: "/settings",
    element: Settings
  },
  // {
  //   id: 3,
  //   path: "/:username",
  //   element: User
  // },
  {
    id: 4,
    path: "/reviews",
    element: Reviews
  },
  {
    id: 5,
    path: "/likes",
    element: Likes
  },
  {
    id: 6,
    path: "/watchlist",
    element: Watchlist
  },
  {
    id: 7,
    path: "/films",
    element: Films
  },
  {
    id: 8,
    path: "/lists",
    element: Lists
  },
  {
    id: 9,
    path: "/search/:inputValue",
    element: Search
  },
  {
    id: 10,
    path: "/movie/:id",
    element: SingleMovie
  },
  {
    id: 11,
    path: "/person/:id",
    element: PersonInfo
  },
  {
    id: 12,
    path: "/discover/:id/:name",
    element: DiscoverMovies
  },
  {
    id: 13,
    path: "/collection/:id/:name",
    element: Collection
  },
  {
    id: 14,
    path: "/*",
    element: Error
  },
  {
    id: 15,
    path: "/*",
    element: ScrollToTop
  },
  {
    id: 16,
    path: "/contact",
    element: Contact
  }
];

export default routes;
