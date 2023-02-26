import { useEffect } from "react";
import TrendingMovies from "../features/trendingMovies/TrendingMovies";
import TrendingPeople from "../features/trendingPeople/TrendingPeople";
import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../features/navbar/navbarSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
  }, []);

  return (
    <section className="home">
      <TrendingMovies />
      <TrendingPeople />
    </section>
  );
};

export default Home;
