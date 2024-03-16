import axios from "axios";
import React, { useState } from "react";
import { BsCapslockFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import {
  useAppDispatch,
  useCapsLock,
  useOutsideClick
} from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";
import { Form } from "../Account.style";

const SignUp: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [signUpStatus, setSignUpStatus] = useState("");
  const dispatch = useAppDispatch();

  const { isCapsOn, handleCapsLock, setIsCapsOn } = useCapsLock();

  const { ref } = useOutsideClick(setIsLogInOpen, () =>
    handleExit(setIsClosing, dispatch, setIsSignUpOpen)
  );

  const addUser = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password } = userInfo;

    if (!username || !email || !password) {
      setSignUpStatus("All fields are required!");
      return;
    }

    axios
      .post("http://localhost:3001/signup", {
        username,
        email,
        password
      })
      .then((response) => {
        const message = response.data.message;

        if (message.includes("username"))
          setSignUpStatus("Username already taken!");
        else if (message.includes("email"))
          setSignUpStatus("Email already taken!");
        else setSignUpStatus(message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FixedContainer>
      <Modal ref={ref} isClosing={isClosing}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsSignUpOpen)}
        />
        <h2>Sign up</h2>
        <Form isStatus={signUpStatus} onSubmit={addUser}>
          <label>
            Username
            <input
              type="text"
              onChange={(event) =>
                setUserInfo({ ...userInfo, username: event.target.value })
              }
              required
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
              onKeyUp={(e) => handleCapsLock(e)}
              onBlur={() => setIsCapsOn(false)}
              required
            />
            {isCapsOn && <BsCapslockFill />}
          </label>
          <p>{signUpStatus}</p>
          <button>Sign up</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
