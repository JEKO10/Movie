import React, { useEffect } from "react";

import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../redux/navbar/navbarSlice";
import { togglePoster } from "../redux/singleMovie/singleMovieSlice";
import TrendingMovies from "../redux/trendingMovies/TrendingMovies";
import TrendingPeople from "../redux/trendingPeople/TrendingPeople";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(togglePoster(false));
  }, []);

  return (
    <section>
      <TrendingMovies />
      <TrendingPeople />
    </section>
  );
};

export default Home;
