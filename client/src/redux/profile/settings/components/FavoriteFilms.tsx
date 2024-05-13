import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import { useAppDispatch } from "../../../../common/hooks";
import { setInputValue } from "../../../navbar/navbarSlice";
import { setIsFavoriteOpen } from "../../profileSlice";
import { FavoriteFilms as Container, RemoveMovie } from "../Settings.styled";

const FavoriteFilms = () => {
  const [movieIndex, setMovieIndex] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    setMovieIndex(index);

    dispatch(setIsFavoriteOpen(true));
    dispatch(setInputValue(""));

    console.log(movieIndex);
  };

  return (
    <Container>
      <h3>Favorite Films</h3>
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
