import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Discover,
  MoviesList,
  Sorting,
} from "../../../assets/style/DiscoverMovies.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { getCollection } from "../discoverMoviesSlice";

const Collection = () => {
  const { collection } = useAppSelector((store) => store.discoverMovies);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    dispatch(getCollection(id));
  }, []);

  return (
    <Discover>
      <Sorting>
        <p>{collection.name}</p>
        <h4>{collection.overview}</h4>
      </Sorting>
      <MoviesList isCollection={true}>
        {collection.parts?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img src={posterUrl + movie.poster_path} alt="Poster" />
          </Link>
        ))}
      </MoviesList>
    </Discover>
  );
};

export default Collection;
