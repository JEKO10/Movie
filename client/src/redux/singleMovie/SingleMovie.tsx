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
import ImageModal from "./components/modals/ImageModal";
import MovieReviews from "./components/MovieReviews";
import Options from "./components/Options";
import {
  getMovie,
  toggleList,
  togglePoster,
  toggleReview,
  toggleShare,
} from "./singleMovieSlice";

const SingleMovie = () => {
  const { isLoading, movieInfo } = useAppSelector((store) => store.singleMovie);
  const {
    title,
    tagline,
    backdrop_path,
    belongs_to_collection: collection,
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
    dispatch(togglePoster(false));
    dispatch(toggleReview(false));
    dispatch(toggleList(false));
    dispatch(toggleShare(false));
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
            onClick={() => dispatch(togglePoster(true))}
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
          <Options />
        </Wrapper>
        <Categories id={id} />
        {collection && (
          <Collection
            to={`/collection/${collection?.id}/${collection?.name}`}
            onClick={() => dispatch(setQuery("collection"))}
          >
            <Poster src={posterUrl + collection.poster_path} alt="POSTER" />
            <p>{collection.name}</p>
          </Collection>
        )}
        <MovieReviews />
      </Movie>
      <ImageModal id={id} posterUrl={posterUrl} poster_path={poster_path} />
    </>
  );
};

export default SingleMovie;
