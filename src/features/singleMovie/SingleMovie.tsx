import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getMovie } from "./singleMovieSlice";
import { setQuery } from "../navbar/navbarSlice";

const SingleMovie = () => {
  const {
    title,
    tagline,
    backdrop_path,
    belongs_to_collection,
    genres,
    budget,
    homepage,
    imdb_id,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    vote_average,
    vote_count,
  } = useAppSelector((store) => store.singleMovie.movieInfo);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(setQuery("singleMovie"));
  }, []);

  return (
    <section className="singleMovie">
      <div
        className="banner"
        style={{ backgroundImage: `url('${posterUrl + backdrop_path}')` }}
      ></div>
      <article className="wrapper">
        <img src={posterUrl + poster_path} alt="POSTER" />
        <div className="info">
          <div className="name">
            <h2>{title}</h2>
            <h4>{release_date?.slice(0, 4)}</h4>
            <h4>Directed by Director</h4>
          </div>
          <div className="overview">
            <h4>{tagline}</h4>
            <p>{overview}</p>
            <h3>{runtime}min</h3>
          </div>
        </div>
        <article className="collection">{belongs_to_collection?.name}</article>
      </article>
    </section>
  );
};

export default SingleMovie;
