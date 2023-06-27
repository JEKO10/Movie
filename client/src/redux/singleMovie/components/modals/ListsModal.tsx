import React, {useState} from "react";

import { Modal, ModalLists, ToggleContainer,
  ToggleLabel,
  ToggleInput,
  ToggleSlider,
  ToggleText } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleList } from "../../singleMovieSlice";
import { RxCross1} from "react-icons/rx";

const ListsModal = () => {
  const { title } = useAppSelector((store) => store.singleMovie.movieInfo);
  const dispatch = useAppDispatch();
  const [isPublic, setIsPublic] = useState(true); // State for the toggle

  const handleToggle = () => {
    setIsPublic(!isPublic); // Toggle the state
  };

  return (
    <Modal>
      <ModalLists>
      <RxCross1 onClick={() => dispatch(toggleList(false))} />
      <h2>Add ‘{title}’ to lists</h2>
      <ToggleContainer>
          <ToggleLabel>
            <ToggleInput
              type="checkbox"
              checked={isPublic}
              onChange={handleToggle}
            />
            <ToggleSlider />
          </ToggleLabel>
          <ToggleText>{isPublic ? "Public" : "Private"}</ToggleText>
        </ToggleContainer>
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
