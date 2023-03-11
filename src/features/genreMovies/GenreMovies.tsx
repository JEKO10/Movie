import React, { useEffect } from "react";
import { getGenreMovies } from "./genreMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const GenreMovies = () => {
  const { genreMovies } = useAppSelector((store) => store.genreMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenreMovies(27));
    console.log(genreMovies);
  }, []);

  return <section>GenreMovies</section>;
};

export default GenreMovies;
