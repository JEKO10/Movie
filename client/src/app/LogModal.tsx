import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../common/hooks";
import { setIsLogOpen } from "../redux/navbar/navbarSlice";
import { LogModal as Container } from "./Log.style";

const LogModal = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <h3>Add to your films…</h3>
      <IoMdClose onClick={() => dispatch(setIsLogOpen(false))} />
      <form>
        <label>Name of Film</label>
        <input type="text" />
      </form>
    </Container>
  );
};

export default LogModal;
