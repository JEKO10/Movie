import React from "react";

import { Fade } from "../../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { SearchData } from "../../../common/types/typesTS";
import {
  setFavoriteMovieId,
  setIsFavoriteOpen,
} from "../../profile/profileSlice";
import { setInputValue, setIsMovieModalOpen } from "../navbarSlice";
import { MovieInfo, SearchedData, SingleMovie } from "./SearchModal.styled";

const SearchModal: React.FC<ModalProps> = ({ setIsClosing }) => {
  console.log("aleksa");
  const { searchData, inputValue, isLogOpen } = useAppSelector(
    (store) => store.navbar
  );
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
              dispatch(setFavoriteMovieId(id));
              dispatch(setInputValue(""));
              handleExit(setIsClosing, dispatch, setIsFavoriteOpen);

              if (isLogOpen)
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
