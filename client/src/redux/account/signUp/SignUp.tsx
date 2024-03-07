import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsSignUpOpen } from "../../navbar/navbarSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const signUpRef = useRef<HTMLElement>(null);

  useOutsideClick(signUpRef, dispatch, setIsSignUpOpen);

  return (
    <FixedContainer>
      <Modal ref={signUpRef}>
        <IoMdClose onClick={() => dispatch(setIsSignUpOpen(false))} />
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
