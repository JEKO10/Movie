import React, { useEffect } from "react";

import Footer from "../common/Footer";
import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../redux/navbar/navbarSlice";
import { togglePoster } from "../redux/singleMovie/singleMovieSlice";
import TrendingMovies from "../redux/trendingMovies/TrendingMovies";
import Features from "./homeComponents/Features";
import FixedSidebar from "./homeComponents/FixedSidebar";
import FriendsActivity from "./homeComponents/FriendsActivity";
import Header from "./homeComponents/Header";
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
      {/* <Header />*/}
      <Features />
      <TrendingMovies />
      <Oscar />
      <News />
      <FriendsActivity />
      <Footer />
    </section>
  );
};

export default Home;
