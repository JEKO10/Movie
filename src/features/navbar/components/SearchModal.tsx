import React, { useEffect } from "react";

import {
  MovieInfo,
  SearchedData,
  SingleMovie,
} from "../../../assets/style/SearchModal.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { searchMovies } from "../navbarSlice";

const SearchModal = () => {
  const { searchData } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w92/";

  useEffect(() => {
    dispatch(searchMovies("the godfather"));
  }, []);

  return (
    <SearchedData>
      {searchData?.map((movie) => (
        <SingleMovie key={movie.id}>
          <img src={posterUrl + movie.poster_path} alt="POSTER" />
          <div>
            <MovieInfo>{movie.title}</MovieInfo>
            <MovieInfo>{movie.release_date.slice(0, 4)}</MovieInfo>
          </div>
        </SingleMovie>
      ))}
    </SearchedData>
  );
};

export default SearchModal;
