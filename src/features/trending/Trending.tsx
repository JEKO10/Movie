import { useEffect } from "react";
import { getTrending, changeTime } from "./trendingSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Trending = () => {
  const { trendingMovies, time } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending(time));
  }, [time]);

  return (
    <section className="trending">
      <div>
        <h2>Popular movies this {time}</h2>
        <div className="toggle" onClick={() => dispatch(changeTime())}>
          <div className="button">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
        {/* <button >asd</button> */}
      </div>
      <article>
        {trendingMovies.slice(0, 5).map(({ id, title, name, poster_path }) => (
          <div key={id} className="movie">
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
