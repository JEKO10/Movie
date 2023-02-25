import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getMovie } from "./singleMovieSlice";

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
  const { movieInfo } = useAppSelector((store) => store.singleMovie);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getMovie(id));
    console.log(movieInfo);
  }, []);

  return (
    <section className="singleMovie">
      <div
        className="banner"
        style={{ backgroundImage: `url('${posterUrl + backdrop_path}')` }}
      ></div>
      {/* <article className="wrapper">
        <img src={posterUrl + poster_path} alt="POSTER" />
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <h3>{runtime}min</h3>
          <h4>{release_date}</h4>
        </div>
        <article className="collection">{belongs_to_collection?.name}</article>
      </article> */}
    </section>
  );
};

export default SingleMovie;
