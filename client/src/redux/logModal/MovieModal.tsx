import React, { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader } from "../../common/Loader";
import { setIsMovieModalOpen } from "../navbar/navbarSlice";
import { getMovie } from "../singleMovie/singleMovieSlice";
import { FixedContainer, LogModal } from "./Log.style";

const MovieModal = () => {
  const { movieInfo, isLoading } = useAppSelector((store) => store.singleMovie);
  const selectedMovieId = useAppSelector(
    (state) => state.navbar.selectedMovieId
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w300/";
  const movieRef = useRef<HTMLElement>(null);

  const { title, poster_path, release_date } = movieInfo;

  useEffect(() => {
    dispatch(getMovie(selectedMovieId.toString()));
  }, [selectedMovieId]);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!movieRef.current?.contains(e.target as Node)) {
        dispatch(setIsMovieModalOpen({ isOpen: false, id: selectedMovieId }));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  if (isLoading) {
    return (
      <FixedContainer>
        <LogModal>
          <Loader style={{ marginTop: "0" }} />
        </LogModal>
      </FixedContainer>
    );
  }
  return (
    <FixedContainer>
      <LogModal ref={movieRef}>
        <img
          src={poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG}
          alt="POSTER"
        />
        <p>{title}</p>
        <p>{release_date}</p>
      </LogModal>
    </FixedContainer>
  );
};

export default MovieModal;
