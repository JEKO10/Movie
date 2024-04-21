import React, { useEffect } from "react";

import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../redux/navbar/navbarSlice";
import { togglePoster } from "../redux/singleMovie/singleMovieSlice";
import TrendingMovies from "../redux/trendingMovies/TrendingMovies";
import Features from "./homeComponents/Features";
import FixedSidebar from "./homeComponents/FixedSidebar";
import News from "./homeComponents/News";
import Oscar from "./homeComponents/Oscar";

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
      <News />
    </section>
  );
};

export default Home;
