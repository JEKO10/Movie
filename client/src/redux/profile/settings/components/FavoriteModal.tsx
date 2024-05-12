import React from "react";
import { IoMdClose } from "react-icons/io";

import {
  useAppDispatch,
  useAppSelector,
  useOutsideClick,
} from "../../../../common/hooks";
import { handleExit, ModalProps } from "../../../../common/modals/modalUtils";
import {
  FixedContainer,
  Modal as Container,
} from "../../../logModal/Log.style";
import Input from "../../../navbar/components/Input";
import { setIsLogOpen } from "../../../navbar/navbarSlice";
import { setIsFavoriteOpen } from "../../profileSlice";

const FavoriteModal: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const { ref } = useOutsideClick(setIsLogOpen, () =>
    handleExit(setIsClosing, dispatch, setIsFavoriteOpen)
  );

  return (
    <FixedContainer>
      <Container ref={ref} isClosing={isClosing}>
        <h3>Pick a favorite film</h3>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsFavoriteOpen)}
        />
        <form>
          <label>Name of Film</label>
          <Input value={inputValue} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default FavoriteModal;
