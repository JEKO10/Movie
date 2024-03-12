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
  const [signUpStatus, setSignUpStatus] = useState(false);
  const dispatch = useAppDispatch();
  const signUpRef = useRef<HTMLElement>(null);
  axios.defaults.withCredentials = true;

  useOutsideClick(signUpRef, dispatch, setIsLogInOpen, () =>
    handleExit(setIsClosing, dispatch, setIsSignUpOpen)
  );

  const addUser = () => {
    axios
      .post("http://localhost:3001/signup", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password
      })
      .then((response) => {
        console.log(response);

        if (response.data.err) {
          console.log("error");
        } else {
          console.log("working");
        }
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
          <p>Status</p>
          <button>Sign up</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
