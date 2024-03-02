import React, { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader } from "../../common/Loader";
import {
  setInputValue,
  setIsLogOpen,
  setIsMovieModalOpen
} from "../navbar/navbarSlice";
import { Rating } from "../singleMovie/SingleMovie.styled";
import { getMovie } from "../singleMovie/singleMovieSlice";
import {
  BackButton,
  FixedContainer,
  LogHeader,
  LogModal,
  MovieModal as Container,
  Review,
  Submit
} from "./Log.style";

const MovieModal = () => {
  const [rating, setRating] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [hover, setHover] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const { movieInfo, isLoading } = useAppSelector((store) => store.singleMovie);
  const selectedMovieId = useAppSelector(
    (state) => state.navbar.selectedMovieId
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w154/";
  const movieRef = useRef<HTMLElement>(null);

  const { title, poster_path, release_date } = movieInfo;

  const backHandle = () => {
    setIsClosing(true);

    setTimeout(() => {
      dispatch(setIsMovieModalOpen({ isOpen: false, id: selectedMovieId }));
      dispatch(setIsLogOpen(true));
      dispatch(setInputValue(title));
    }, 300);
  };

  const handleExit = () => {
    setIsClosing(true);

    setTimeout(() => {
      dispatch(setIsMovieModalOpen({ isOpen: false, id: selectedMovieId }));
    }, 300);
  };

  useEffect(() => {
    dispatch(getMovie(selectedMovieId.toString()));
  }, [selectedMovieId]);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!movieRef.current?.contains(e.target as Node)) {
        handleExit();
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
      <Container ref={movieRef} isClosing={isClosing}>
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
              <div>
                <label>
                  <input type="checkbox" />
                  <span>Watched on 28.2.2024.</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>I’ve watched this film before</span>
                </label>
              </div>
              <textarea placeholder="Add a review..." />
            </Review>
            <Rating>
              <p>Rating</p>
              <div>
                {rating ? <FiX onClick={() => setRating(0)} /> : ""}
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;

                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => {
                          setRating(ratingValue);
                          console.log("a");
                        }}
                      />
                      <RiStarSFill
                        color={
                          ratingValue <= (hover || rating)
                            ? "#00AF51"
                            : "#334455"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                      />
                    </label>
                  );
                })}
              </div>
            </Rating>
            <div onClick={() => setIsLike(!isLike)}>
              <p>Like</p>
              <FaHeart
                color={isLike ? "#ff9023" : "#334455"}
                fill={isLike ? "#ff9023" : "#334455"}
              />
            </div>
            <Submit>
              <label>
                <input type="checkbox" />
                <span>Contains spoilers</span>
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
