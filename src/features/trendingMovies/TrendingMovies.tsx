import { useEffect } from "react";
import { getTrending, changeTime } from "./trendingMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Trending = () => {
  const { trendingMovies, time } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending(time));
  }, [time]);

  return (
    <section className="trending">
      <div className="title">
        <h2>Popular movies {time === "day" ? "today" : "this " + time}</h2>
        <div className="toggle" onClick={() => dispatch(changeTime())}>
          <div className="button">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <article>
        {trendingMovies.slice(0, 5).map(({ id, title, name, poster_path }) => (
          <div key={id} className="trendElement">
            <img src={posterUrl + poster_path} alt="Poster" />
            <div className="info">
              <h4>{title ? title : name}</h4>
              {title?.length > 17 || name?.length > 17 ? (
                <div className="fade"></div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Trending;
