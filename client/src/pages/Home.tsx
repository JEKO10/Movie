import React, { useEffect } from "react";

import Features from "../app/Features";
import FixedSidebar from "../app/FixedSidebar";
import Oscar from "../app/Oscar";
import TrendingMovies from "../app/TrendingMovies";
import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../redux/navbar/navbarSlice";
import { togglePoster } from "../redux/singleMovie/singleMovieSlice";
// import TrendingMovies from "../redux/trendingMovies/TrendingMovies";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(togglePoster(false));
  }, []);

  return (
    <section>
      <FixedSidebar />
      <TrendingMovies />
      <Features />
      <Oscar />
    </section>
  );
};

export default Home;
