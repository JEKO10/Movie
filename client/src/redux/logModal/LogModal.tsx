import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { handleExit, ModalProps } from "../../common/modals/modalUtils";
import Input from "../navbar/components/Input";
import { setIsLogOpen } from "../navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Container isClosing={isClosing}>
        <h3>Add to your films…</h3>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsLogOpen)}
        />
        <form>
          <label>Name of Film</label>
          <Input value={inputValue} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
