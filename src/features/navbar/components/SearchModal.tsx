import React from "react";

import { Fade } from "../../../assets/style/Fade.styled";
import {
  MovieInfo,
  SearchedData,
  SingleMovie,
} from "../../../assets/style/SearchModal.styled";
import { useAppSelector } from "../../../common/hooks";
import { SearchData } from "../../../common/types/typesTS";

const SearchModal = () => {
  const { searchData, inputValue } = useAppSelector((store) => store.navbar);
  const posterUrl = "https://image.tmdb.org/t/p/w92/";

  return (
    <SearchedData>
      {searchData?.map((movie: SearchData) => (
        <SingleMovie key={movie.id} to={`/movie/${movie.id}`}>
          <img
            src={posterUrl + (movie.profile_path || movie.poster_path)}
            alt="POSTER"
          />
          <div>
            <MovieInfo>{movie.title || movie.name}</MovieInfo>
            <MovieInfo>{movie.release_date?.slice(0, 4)}</MovieInfo>
            {movie.title && movie.title.length > 13 && (
              <Fade isTrending={false} />
            )}
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
