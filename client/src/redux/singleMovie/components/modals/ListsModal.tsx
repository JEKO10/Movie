import React from "react";

import { Modal, ModalLists } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";
import { RxCross1} from "react-icons/rx";

const ListsModal = () => {
  const { title } = useAppSelector((store) => store.singleMovie.movieInfo);
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <ModalLists>
      <RxCross1 onClick={() => dispatch(toggleList(false))} />
      <h2>Add ‘{title}’ to lists</h2>
      <div>
        <p>Public</p>
        <p>Private</p>
      </div>
      <div>
        <p>+ New list...</p>
        <p>Search...</p>
      </div>
      <button>Add</button>
      </ModalLists>
    </Modal>
  );
};

export default ListsModal;
