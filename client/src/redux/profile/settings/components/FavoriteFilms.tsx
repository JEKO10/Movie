import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { setInputValue } from "../../../navbar/navbarSlice";
import { setIsFavoriteOpen } from "../../profileSlice";
import { FavoriteFilms as Container, RemoveMovie } from "../Settings.styled";

const FavoriteFilms = () => {
  const { favoriteMovie } = useAppSelector((store) => store.profile);
  const [movieIndex, setMovieIndex] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    setMovieIndex(index);

    dispatch(setIsFavoriteOpen(true));
    dispatch(setInputValue(""));
  };

  return (
    <Container>
      <h3>Favorite Films</h3>
      {favoriteMovie}
      <ul>
        <li onClick={() => handleClick(0)}>
          <RemoveMovie />
          <FaCirclePlus />
        </li>
        <li onClick={() => handleClick(1)}>
          <RemoveMovie />
          <FaCirclePlus />
        </li>
        <li onClick={() => handleClick(2)}>
          <RemoveMovie />
          <FaCirclePlus />
        </li>
        <li onClick={() => handleClick(3)}>
          <RemoveMovie />
          <FaCirclePlus />
        </li>
      </ul>
    </Container>
  );
};

export default FavoriteFilms;
