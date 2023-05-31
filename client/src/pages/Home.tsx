import React, { useEffect } from "react";

import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../redux/navbar/navbarSlice";
import { toggleModal } from "../redux/singleMovie/singleMovieSlice";
import TrendingMovies from "../redux/trendingMovies/TrendingMovies";
import TrendingPeople from "../redux/trendingPeople/TrendingPeople";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(toggleModal(false));
  }, []);

  return (
    <section>
      <TrendingMovies />
      <TrendingPeople />
    </section>
  );
};

export default Home;
