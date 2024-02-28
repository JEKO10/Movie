import React, { useEffect, useRef } from "react";
import { CiHeart, CiStar } from "react-icons/ci";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader } from "../../common/Loader";
import {
  setInputValue,
  setIsLogOpen,
  setIsMovieModalOpen
} from "../navbar/navbarSlice";
import { getMovie } from "../singleMovie/singleMovieSlice";
import {
  BackButton,
  FixedContainer,
  LogHeader,
  LogModal,
  MovieModal as Container,
  Rating,
  Review,
  Submit
} from "./Log.style";

const MovieModal = () => {
  const { movieInfo, isLoading } = useAppSelector((store) => store.singleMovie);
  const selectedMovieId = useAppSelector(
    (state) => state.navbar.selectedMovieId
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w154/";
  const movieRef = useRef<HTMLElement>(null);

  const { title, poster_path, release_date } = movieInfo;

  const backHandle = () => {
    dispatch(setIsMovieModalOpen({ isOpen: false, id: selectedMovieId }));
    dispatch(setIsLogOpen(true));
    dispatch(setInputValue(title));
  };

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
      <Container ref={movieRef}>
        <BackButton onClick={() => backHandle()}>Back</BackButton>
        <section>
          <img
            src={
              poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG
            }
            alt="POSTER"
          />
          <article style={{ width: "100%" }}>
            <LogHeader>
              <h3>I Watched...</h3>
              <div>
                <h2>{title}</h2>
                <h4>{release_date.slice(0, 4)}</h4>
              </div>
            </LogHeader>
            <Review>
              <label>
                <input type="checkbox" />
                Watched on
                <span>28.2.2024.</span>
              </label>
              <label>
                <input type="checkbox" />
                I’ve watched this film before
              </label>
            </Review>
            <textarea cols={30} rows={10} />
            <Rating>
              <div>
                <p>Rating</p>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <div>
                <p>Like</p>
                <CiHeart />
              </div>
            </Rating>
            <Submit>
              <label>
                <input type="checkbox" />
                Contains spoilers
              </label>
              <button>Save</button>
            </Submit>
          </article>
        </section>
      </Container>
    </FixedContainer>
  );
};

export default MovieModal;
