import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";

const LogIn: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const dispatch = useAppDispatch();
  const logInRef = useRef<HTMLElement>(null);

  useOutsideClick(logInRef, dispatch, setIsSignUpOpen, () =>
    handleExit(setIsClosing, dispatch, setIsLogInOpen)
  );

  return (
    <FixedContainer>
      <Modal isClosing={isClosing} ref={logInRef}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsLogInOpen)}
        />
      </Modal>
    </FixedContainer>
  );
};

export default LogIn;
