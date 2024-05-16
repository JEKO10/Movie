import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { handleExit, ModalProps } from "../../../../common/modals/modalUtils";
import {
  FixedContainer,
  Modal as Container,
} from "../../../logModal/Log.style";
import Input from "../../../navbar/components/Input";
import { setInputValue } from "../../../navbar/navbarSlice";
import { setIsFavoriteOpen } from "../../profileSlice";

const FavoriteModal: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Container isClosing={isClosing}>
        <h3>Pick a favorite film</h3>
        <IoMdClose
          onClick={() => {
            handleExit(setIsClosing, dispatch, setIsFavoriteOpen);
            dispatch(setInputValue(""));
          }}
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
