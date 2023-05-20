import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Banner,
  Collection,
  Info,
  Movie,
  Name,
  Overview,
  Poster,
  Wrapper,
} from "../../assets/style/SingleMovie.styled";
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
    belongs_to_collection,
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
    console.log(belongs_to_collection);
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
        <Banner posterUrl={posterUrl} backdrop_path={backdrop_path}></Banner>
        <Wrapper>
          <Poster
            src={
              poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG
            }
            alt="POSTER"
            onClick={() => dispatch(toggleModal(true))}
          />
          <Info>
            <Name>
              <h2>{title}</h2>
              <h4>{release_date?.slice(0, 4)}</h4>
              <h4>
                Directed by
                <Link to={`/person/${director?.id}/`}>{director?.name}</Link>
              </h4>
            </Name>
            <Overview>
              <h4>{tagline}</h4>
              <p>{overview}</p>
              <h3>{runtime} min</h3>
            </Overview>
          </Info>
          {belongs_to_collection && (
            <Collection>
              <Poster
                src={posterUrl + belongs_to_collection.poster_path}
                alt="POSTER"
              />
              <p>{belongs_to_collection.name}</p>
            </Collection>
          )}
        </Wrapper>
        <Categories id={id} />
      </Movie>
      <ImageModal id={id} posterUrl={posterUrl} poster_path={poster_path} />
    </>
  );
};

export default SingleMovie;
