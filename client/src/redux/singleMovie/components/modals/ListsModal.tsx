import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1, RxPlus } from "react-icons/rx";

import {
  AddToList,
  Modal,
  ModalLists,
  PublicToggle,
} from "../../../../assets/style/Modals.styled";
import { Underline } from "../../../../assets/style/SingleMovie.styled";
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
        <Underline margin={`0 -40px`} width="calc(100% + 80px)" />
        <AddToList>
          <div>
            <RxPlus />
            <p>New list...</p>
          </div>
          <label>
            <input type="text" placeholder="Search..." />
            <FaSearch />
          </label>
        </AddToList>
        <button onClick={() => dispatch(toggleList(false))}>Add</button>
      </ModalLists>
    </Modal>
  );
};

export default ListsModal;
