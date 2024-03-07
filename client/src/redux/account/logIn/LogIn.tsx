import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen } from "../../navbar/navbarSlice";

const LogIn = () => {
  const dispatch = useAppDispatch();
  const logInRef = useRef<HTMLElement>(null);

  useOutsideClick(logInRef, dispatch, setIsLogInOpen);

  return (
    <FixedContainer>
      <Modal ref={logInRef}>
        <IoMdClose onClick={() => dispatch(setIsLogInOpen(false))} />
      </Modal>
    </FixedContainer>
  );
};

export default LogIn;
