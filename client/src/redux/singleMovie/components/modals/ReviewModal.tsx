import React from "react";
import { RxCross1 } from "react-icons/rx";

import { Modal, ModalReview } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleReview } from "../../singleMovieSlice";

const ReviewModal = () => {
  const { poster_path, title } = useAppSelector(
    (store) => store.singleMovie.movieInfo
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w300/";

  return (
    <Modal>
      <ModalReview>
        <RxCross1 onClick={() => dispatch(toggleReview(false))} />
        <img src={posterUrl + poster_path} alt="POSTER" />
        <div>
          <h2>{title}</h2>
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
          <div>
            <label>
              <input type="checkbox" />
              Contains spoilers
            </label>
            <button>Save</button>
          </div>
        </div>
      </ModalReview>
    </Modal>
  );
};

export default ReviewModal;
