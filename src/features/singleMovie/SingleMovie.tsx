import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Banner, Movie, Wrapper } from "../../assets/style/SingleMovie.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { setQuery } from "../navbar/navbarSlice";
import Categories from "./components/Categories";
import ImageModal from "./components/ImageModal";
import { getMovie, toggleModal } from "./singleMovieSlice";

const SingleMovie = () => {
  const { isLoading, movieInfo } = useAppSelector((store) => store.singleMovie);
  const {
    title,
    tagline,
    backdrop_path,
    // belongs_to_collection,
    // imdb_id,
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

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(setQuery("singleMovie"));
    console.log(movieInfo);
  }, [id]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <>
      <Movie>
        <Banner
          style={{ backgroundImage: `url('${posterUrl + backdrop_path}')` }}
        ></Banner>
        <Wrapper>
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
        </Wrapper>
        <Categories id={id} />
      </Movie>
      <ImageModal id={id} posterUrl={posterUrl} poster_path={poster_path} />
    </>
  );
};

export default SingleMovie;
