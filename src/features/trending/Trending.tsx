import { useEffect } from "react";
import { getTrending } from "./trendingSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Trending = () => {
  const { trendingMovies } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    dispatch(getTrending());
    console.log(trendingMovies);
  }, []);

  return (
    <section className="trending">
      <h1>Most popular movies right now</h1>
      <ul>
        {trendingMovies.slice(0, 7).map(({ id, title, poster_path }) => (
          <li key={id}>
            <img src={posterUrl + poster_path} alt="Poster" />
            <h1>{title}</h1>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Trending;
