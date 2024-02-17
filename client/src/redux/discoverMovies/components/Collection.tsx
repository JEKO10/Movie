import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { Loader, LoaderWrapper } from "../../../common/Loader";
import { Discover, MoviesList, Sorting } from "../DiscoverMovies.styled";
import { getCollection } from "../discoverMoviesSlice";

const Collection = () => {
  const { collection, isLoading } = useAppSelector(
    (store) => store.discoverMovies
  );
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    dispatch(getCollection(id));
  }, []);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Discover>
      <Sorting>
        <p>{collection.name}</p>
        <h4>{collection.overview}</h4>
      </Sorting>
      <MoviesList isCollection={true}>
        {collection.parts?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? posterUrl + movie.poster_path
                  : import.meta.env.VITE_IMG
              }
              alt="Poster"
            />
          </Link>
        ))}
      </MoviesList>
    </Discover>
  );
};

export default Collection;
