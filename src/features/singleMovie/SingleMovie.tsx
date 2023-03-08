import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getMovie, toggleModal, toggleCategory } from "./singleMovieSlice";
import { setQuery } from "../navbar/navbarSlice";
import { RxCross2 } from "react-icons/rx";
import Categories from "./components/Categories";

const SingleMovie = () => {
  const { movieInfo, isModalOpen, category } = useAppSelector(
    (store) => store.singleMovie
  );
  const {
    title,
    tagline,
    backdrop_path,
    belongs_to_collection,
    imdb_id,
    overview,
    poster_path,
    release_date,
    runtime,
    credits,
  } = movieInfo;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  const director = credits?.crew.find((person) => person.job === "Director");
  const posterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(setQuery("singleMovie"));
    document.addEventListener("click", clickOutside, true);
    console.log(movieInfo);
  }, [id]);

  const clickOutside = (e) => {
    if (!posterRef.current?.contains(e.target)) {
      dispatch(toggleModal(false));
    } else {
      dispatch(toggleModal(true));
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
          <article className="info">
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
              <h3>{runtime} min</h3>
            </div>
          </article>
        </article>
        <Categories />
      </section>
      <div className={`${isModalOpen ? "open" : ""} posterModal`}>
        <RxCross2 onClick={() => dispatch(toggleModal(false))} />
        <img src={posterUrl + poster_path} alt="POSTER" ref={posterRef} />
      </div>
    </>
  );
};

export default SingleMovie;
