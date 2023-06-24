import React from "react";

import { Modal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleReview } from "../../singleMovieSlice";

const ReviewModal = () => {
  const { poster_path } = useAppSelector(
    (store) => store.singleMovie.movieInfo
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w300/";

  return (
    <Modal>
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
