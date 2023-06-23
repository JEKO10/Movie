import React, { useEffect, useRef } from "react";

import { Modal } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";

const ListsModal = () => {
  const { title } = useAppSelector((store) => store.singleMovie.movieInfo);
  const dispatch = useAppDispatch();
  const listsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, [title]);

  const clickOutside = (e: MouseEvent) => {
    if (!listsRef.current?.contains(e.target as Node)) {
      dispatch(toggleList(false));
    } else {
      dispatch(toggleList(true));
    }
  };

  return (
    <Modal ref={listsRef}>
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
