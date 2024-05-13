import React from "react";

import { Fade } from "../../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { SearchData } from "../../../common/types/typesTS";
import { setFavoriteMovie } from "../../profile/profileSlice";
import { setIsMovieModalOpen } from "../navbarSlice";
import { MovieInfo, SearchedData, SingleMovie } from "./SearchModal.styled";

const SearchModal = () => {
  const { searchData, inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <SearchedData>
      {searchData?.map((movie: SearchData) => {
        const { id, title, name, release_date } = movie;

        return (
          <SingleMovie
            key={id}
            to={"#"}
            onClick={() => {
              dispatch(setFavoriteMovie(id));
              dispatch(setIsMovieModalOpen({ isOpen: true, id }));
            }}
          >
            <div>
              <MovieInfo>{title || name}</MovieInfo>
              <MovieInfo>{release_date?.slice(0, 4)}</MovieInfo>
              <Fade isTrending={false} />
            </div>
          </SingleMovie>
        );
      })}
      {searchData.length === 0 && inputValue && (
        <p>There were no matches for your search term.</p>
      )}
    </SearchedData>
  );
};

export default SearchModal;
