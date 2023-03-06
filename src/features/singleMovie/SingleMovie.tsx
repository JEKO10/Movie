import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getMovie, toggleModal } from "./singleMovieSlice";
import { setQuery } from "../navbar/navbarSlice";
import { RxCross2 } from "react-icons/rx";

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
  const { movieInfo, isModalOpen } = useAppSelector(
    (store) => store.singleMovie
  );
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  const director = movieInfo?.credits?.crew.find(
    (person) => person.job === "Director"
  );
  const posterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(setQuery("singleMovie"));
    document.addEventListener("click", clickOutside, true);
  }, [id]);

  const clickOutside = (e) => {
    if (!posterRef.current?.contains(e.target)) {
      dispatch(toggleModal(false));
    }
  };

  return (
    <>
      <section className="singleMovie">
        <div
          className="banner"
          style={{ backgroundImage: `url('${posterUrl + backdrop_path}')` }}
        ></div>
        <article className="wrapper">
          <img
            src={posterUrl + poster_path}
            alt="POSTER"
            onClick={() => dispatch(toggleModal(true))}
          />
          <div className="info">
            <div className="name">
              <h2>{title}</h2>
              <h4>{release_date?.slice(0, 4)}</h4>
              <h4>
                Directed by
                <Link to={`/person/${director?.id}/`}>{director?.name}</Link>
              </h4>
            </div>
            <div className="overview">
              <h4>{tagline}</h4>
              <p>{overview}</p>
              <h3>{runtime}min</h3>
            </div>
            <div></div>
          </div>
          {/* <article className="collection">{belongs_to_collection?.name}</article> */}
        </article>
      </section>
      {isModalOpen && (
        <div className="posterModal">
          <RxCross2 onClick={() => dispatch(toggleModal(false))} />
          <img src={posterUrl + poster_path} alt="POSTER" ref={posterRef} />
        </div>
      )}
    </>
  );
};

export default SingleMovie;
