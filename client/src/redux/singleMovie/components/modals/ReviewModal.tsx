import React, { useEffect, useRef } from "react";

import { Modal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleReview } from "../../singleMovieSlice";

const ReviewModal = () => {
  const { poster_path } = useAppSelector(
    (store) => store.singleMovie.movieInfo
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w300/";
  const reviewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, [poster_path]);

  const clickOutside = (e: MouseEvent) => {
    if (!reviewRef.current?.contains(e.target as Node)) {
      dispatch(toggleReview(false));
    } else {
      dispatch(toggleReview(true));
    }
  };

  return (
    <Modal ref={reviewRef}>
      <h3 onClick={() => dispatch(toggleReview(false))}>Close</h3>
      <h1>Title</h1>
      <img src={posterUrl + poster_path} alt="POSTER" />
      <div>
        <label>
          <input type="checkbox" />
          Watched on 23 6 2023
        </label>
        <label>
          <input type="checkbox" />
          I`ve watched this film before
        </label>
      </div>
      <textarea placeholder="Add a review" cols={45} rows={10} />
      <label>
        <input type="checkbox" />
        Contains spoilers
      </label>
      <button>Save</button>
    </Modal>
  );
};

export default ReviewModal;
