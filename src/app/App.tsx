import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Films from "./pages/Films";
import SingleMovie from "./pages/SingleMovie";
import Watchlist from "./pages/Watchlist";
import Lists from "./pages/Lists";
import Reviews from "./pages/Reviews";
import Likes from "./pages/Likes";
import Error from "./pages/Error";
import { getMovies } from "./features/moviesSlice";
import { useAppSelector, useAppDispatch } from "./common/hooks";

function App() {
  const dispatch = useAppDispatch();

  const { allMovies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [allMovies]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/films" element={<Films />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/singeMovie" element={<SingleMovie />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
