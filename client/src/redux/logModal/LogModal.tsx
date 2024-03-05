import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import Input from "../navbar/components/Input";
import { setIsLogOpen } from "../navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const handleExit = () => {
    setIsClosing(true);

    setTimeout(() => {
      dispatch(setIsLogOpen(false));
    }, 300);
  };

  return (
    <FixedContainer>
      <Container isClosing={isClosing}>
        <h3>Add to your films…</h3>
        <IoMdClose onClick={() => handleExit()} />
        <form>
          <label>Name of Film</label>
          <Input value={inputValue} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
