import { useEffect } from "react";
import { getTrending } from "./trendingSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Trending = () => {
  const { trendingMovies } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending());
    console.log(trendingMovies);
  }, []);

  return (
    <section className="trending">
      <h1>Most popular movies right now</h1>
      <article>
        {trendingMovies.slice(0, 5).map(({ id, title, name, poster_path }) => (
          <div key={id} className="movie">
            <img src={posterUrl + poster_path} alt="Poster" />
            <div className="info">
              <h4
                className={
                  title?.length > 15 || name?.length > 15 ? "move" : ""
                }
              >
                {title ? title : name}
              </h4>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Trending;
