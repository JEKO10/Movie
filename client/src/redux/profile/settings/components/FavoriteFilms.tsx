import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { setInputValue } from "../../../navbar/navbarSlice";
import { getMovie } from "../../../singleMovie/singleMovieSlice";
import { setIsFavoriteOpen } from "../../profileSlice";
import {
  FavoriteFilm,
  FavoriteFilms as Container,
  RemoveMovie,
} from "../Settings.styled";

const FavoriteFilms = () => {
  const [movieIndex, setMovieIndex] = useState<number>(0);
  const { favoriteMovieId } = useAppSelector((store) => store.profile);
  const { movieInfo } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w342/";
  const [posterPaths, setPosterPaths] = useState<string[]>(["", "", "", ""]);

  const handleClick = (index: number) => {
    setMovieIndex(index);

    dispatch(setIsFavoriteOpen(true));
    dispatch(setInputValue(""));
  };

  useEffect(() => {
    dispatch(getMovie(favoriteMovieId.toString()));
  }, [favoriteMovieId]);

  useEffect(() => {
    if (movieInfo.poster_path) {
      setPosterPaths((prevPaths) => {
        const newPaths = [...prevPaths];
        newPaths[movieIndex] = posterUrl + movieInfo.poster_path;

        return newPaths;
      });
    }
  }, [movieInfo]);

  return (
    <Container>
      <h3>Favorite Films</h3>
      <ul>
        {[0, 1, 2, 3].map((index) => (
          <FavoriteFilm
            key={index}
            onClick={() => handleClick(index)}
            background={posterPaths[index]}
          >
            {posterPaths[index] && (
              <RemoveMovie
                onClick={(e) => {
                  e.stopPropagation();
                  const newPaths = [...posterPaths];
                  newPaths[index] = "";

                  setPosterPaths(newPaths);
                }}
              />
            )}
            {!posterPaths[index] && <FaCirclePlus />}
          </FavoriteFilm>
        ))}
      </ul>
    </Container>
  );
};

export default FavoriteFilms;
