import axios from "axios";
import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useOutsideClick } from "../../../common/hooks";
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
  const signUpRef = useRef<HTMLElement>(null);
  axios.defaults.withCredentials = true;

  useOutsideClick(signUpRef, dispatch, setIsLogInOpen, () =>
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
        if (response.data.message) {
          const message = response.data.message;
          // setSignUpStatus(message);

          console.log("Prouka: " + message);
        }
      })
      .catch((err) => {
        console.log("nebitno: " + err);
      });
  };

  return (
    <FixedContainer>
      <Modal ref={signUpRef} isClosing={isClosing}>
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
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
          </label>
          <p>{signUpStatus}</p>
          <button>Sign up</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
