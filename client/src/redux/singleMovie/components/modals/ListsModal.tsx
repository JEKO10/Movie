import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import {
  Modal,
  ModalLists,
  PublicToggle,
} from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";

const ListsModal = () => {
  const { title } = useAppSelector((store) => store.singleMovie.movieInfo);
  const dispatch = useAppDispatch();
  const [isPublic, setIsPublic] = useState(true);

  return (
    <Modal>
      <ModalLists>
        <RxCross1 onClick={() => dispatch(toggleList(false))} />
        <h2>Add ‘{title}’ to lists</h2>
        <div>
          <PublicToggle onClick={() => setIsPublic(true)} isPublic={isPublic}>
            Public
          </PublicToggle>
          <PublicToggle onClick={() => setIsPublic(false)} isPublic={!isPublic}>
            Private
          </PublicToggle>
        </div>
        <div>
          <p>+ New list...</p>
          <p>Search...</p>
        </div>
        <button onClick={() => dispatch(toggleList(false))}>Add</button>
      </ModalLists>
    </Modal>
  );
};

export default ListsModal;
