import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";
import { Form } from "../Account.style";

const LogIn: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const [isLogInStatus, setIsLogInStatus] = useState(false);
  const dispatch = useAppDispatch();
  const logInRef = useRef<HTMLElement>(null);

  useOutsideClick(logInRef, dispatch, setIsSignUpOpen, () =>
    handleExit(setIsClosing, dispatch, setIsLogInOpen)
  );

  const handleClick = () => {
    setIsLogInStatus(true);

    setTimeout(() => {
      setIsLogInStatus(false);
    }, 2000);
  };

  return (
    <FixedContainer>
      <Modal isClosing={isClosing} ref={logInRef}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsLogInOpen)}
        />
        <h2>Log in</h2>
        <Form isLogInStatus={isLogInStatus}>
          <label>
            Email or username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <p>Your credentials don`t match.</p>
          <button onClick={handleClick}>Log in</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default LogIn;
