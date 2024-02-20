import React from "react";
import { IoMdClose } from "react-icons/io";

import { LogModal as Container } from "./Log.style";

const LogModal = () => {
  return (
    <Container>
      <p>Add to your films…</p>
      <IoMdClose />
      <form>
        <label>Name of Film</label>
        <input type="text" />
      </form>
    </Container>
  );
};

export default LogModal;
