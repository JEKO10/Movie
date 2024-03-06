import React, { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader } from "../../common/Loader";
import StarRating from "../../common/StarRating";
import {
  setInputValue,
  setIsLogOpen,
  setIsMovieModalOpen
} from "../navbar/navbarSlice";
import { Like } from "../singleMovie/SingleMovie.styled";
import { getMovie } from "../singleMovie/singleMovieSlice";
import Checkbox from "./components/Checkbox";
import {
  BackButton,
  FixedContainer,
  LogHeader,
  LogModal,
  MovieModal as Container,
  Rating,
  Review,
  Submit,
  Tags
} from "./Log.style";

const MovieModal = () => {
  const [checkboxes, setCheckboxes] = useState({
    isWatched: false,
    isRewatch: false,
    isSpoiler: false
  });
  const [tags, setTags] = useState<string[]>([]);
  const [isLike, setIsLike] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { movieInfo, isLoading } = useAppSelector((store) => store.singleMovie);
  const selectedMovieId = useAppSelector(
    (state) => state.navbar.selectedMovieId
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w154/";
  const movieRef = useRef<HTMLElement>(null);

  const { title, poster_path, release_date } = movieInfo;

  const handleCheckboxChange = (checkboxName: keyof typeof checkboxes) => {
    setCheckboxes(() => ({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName]
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputElement = event.target as HTMLInputElement;
      const newTag = inputElement.value;

      if (newTag && !tags.includes(newTag) && newTag) {
        setTags([...tags, newTag]);
      }

      inputElement.value = "";
    }
  };

  const handleDelete = (clickedTag: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== clickedTag));
  };

  const handleBack = () => {
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
        <IoMdClose onClick={() => handleExit()} />
        <BackButton onClick={() => handleBack()}>Back</BackButton>
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
                <Checkbox
                  label="Watched on 28.2.2024."
                  checked={checkboxes.isWatched}
                  onChange={() => handleCheckboxChange("isWatched")}
                />
                <Checkbox
                  label="I’ve watched this film before"
                  checked={checkboxes.isRewatch}
                  onChange={() => handleCheckboxChange("isRewatch")}
                />
              </div>
              <textarea placeholder="Add a review..." />
            </Review>
            <Rating>
              <div>
                <p>Tags</p>
                <input
                  type="text"
                  placeholder="eg. HBO MAX"
                  onKeyDown={(event) => handleKeyDown(event)}
                />
              </div>
              <StarRating />
              <div onClick={() => setIsLike(!isLike)}>
                <p>Like</p>
                <Like isLike={isLike} />
              </div>
            </Rating>
            <Tags>
              {tags.map((tag) => (
                <p title={tag} key={tag} onClick={() => handleDelete(tag)}>
                  <span>
                    {tag.slice(0, 15)}
                    {tag.length > 15 && "..."}
                    <FiX />
                  </span>
                </p>
              ))}
            </Tags>
            <Submit>
              <Checkbox
                label="Contains spoilers"
                checked={checkboxes.isSpoiler}
                onChange={() => handleCheckboxChange("isSpoiler")}
              />
              <button>Save</button>
            </Submit>
          </article>
        </section>
      </Container>
    </FixedContainer>
  );
};

export default MovieModal;
