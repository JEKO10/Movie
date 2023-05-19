import React from "react";

import {
  MovieInfo,
  SearchedData,
  SingleMovie,
} from "../../../assets/style/SearchModal.styled";
import { useAppSelector } from "../../../common/hooks";

const SearchModal = () => {
  const { searchData, inputValue } = useAppSelector((store) => store.navbar);
  const posterUrl = "https://image.tmdb.org/t/p/w92/";

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
      {searchData.length === 0 && inputValue && (
        <p>There were no matches for your search term.</p>
      )}
    </SearchedData>
  );
};

export default SearchModal;
