import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";
import { Form } from "../Account.style";

const SignUp: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const [signUpStatus, setSignUpStatus] = useState(false);
  const dispatch = useAppDispatch();
  const signUpRef = useRef<HTMLElement>(null);

  useOutsideClick(signUpRef, dispatch, setIsLogInOpen, () =>
    handleExit(setIsClosing, dispatch, setIsSignUpOpen)
  );

  const handleClick = () => {
    setSignUpStatus(true);

    setTimeout(() => {
      setSignUpStatus(false);
    }, 2000);
  };

  return (
    <FixedContainer>
      <Modal ref={signUpRef} isClosing={isClosing}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsSignUpOpen)}
        />
        <h2>Sign up</h2>
        <Form isStatus={signUpStatus}>
          <label>
            Email address
            <input type="text" />
          </label>
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <p>Failed</p>
          <button onClick={handleClick}>Sign up</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
