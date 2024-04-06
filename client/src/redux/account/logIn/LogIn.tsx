import axios from "axios";
import React, { useState } from "react";
import { BsCapslockFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
  useAppDispatch,
  useCapsLock,
  useOutsideClick
} from "../../../common/hooks";
import { handleExit, ModalProps } from "../../../common/modals/modalUtils";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen, setIsSignUpOpen } from "../../navbar/navbarSlice";
import { Form } from "../Account.style";

const LogIn: React.FC<ModalProps> = ({ isClosing, setIsClosing }) => {
  const [userInfo, setUserInfo] = useState({
    identifier: "",
    password: ""
  });
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const [logInStatus, setLogInStatus] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const { isCapsOn, handleCapsLock, setIsCapsOn } = useCapsLock();

  const { ref } = useOutsideClick(setIsSignUpOpen, () =>
    handleExit(setIsClosing, dispatch, setIsLogInOpen)
  );

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { identifier, password } = userInfo;

    if (!identifier || !password) {
      setLogInStatus("All files are required!");
      return;
    }

    setIsLoading(true);
    setLogInStatus("Loading...");

    axios
      .post("http://localhost:3001/login", { identifier, password })
      .then((response) => {
        if (response.data.message) {
          setLogInStatus(response.data.message);
        } else {
          setLogInStatus("Welcome " + response.data[0].username);
          navigate(`/${response.data[0].username}`);
          window.location.reload();
        }

        setIsLoading(false);
      });
  };

  return (
    <FixedContainer>
      <Modal isClosing={isClosing} ref={ref}>
        <IoMdClose
          onClick={() => handleExit(setIsClosing, dispatch, setIsLogInOpen)}
        />
        <h2>Log in</h2>
        <Form isStatus={logInStatus} onSubmit={handleLogin}>
          <label>
            Email or username
            <input
              type="text"
              onChange={(event) =>
                setUserInfo({ ...userInfo, identifier: event.target.value })
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
          <p>{logInStatus}</p>
          <button>Log in</button>
        </Form>
      </Modal>
    </FixedContainer>
  );
};

export default LogIn;
