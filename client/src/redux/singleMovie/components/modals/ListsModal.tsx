import React from "react";

import { Modal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";

const ListsModal = () => {
  const { title } = useAppSelector((store) => store.singleMovie.movieInfo);
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <h3 onClick={() => dispatch(toggleList(false))}>Close</h3>
      <h1>Add ‘{title}’ to lists</h1>
      <div>
        <p>Public</p>
        <p>Private</p>
      </div>
      <div>
        <p>+ New list...</p>
        <p>Search...</p>
      </div>
      <button>Add</button>
    </Modal>
  );
};

export default ListsModal;
