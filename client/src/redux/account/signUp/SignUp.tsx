import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";

const SignUp: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const dispatch = useAppDispatch();
  const signUpRef = useRef<HTMLElement>(null);

  useOutsideClick(signUpRef, dispatch, setIsLogInOpen, () =>
    handleExit(setIsClosing, dispatch, setIsSignUpOpen)
  );

  return (
    <FixedContainer>
      <Modal ref={signUpRef} isClosing={isClosing}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsSignUpOpen)}
        />
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
