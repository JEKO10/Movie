import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { FixedContainer, Modal as Container } from "../../logModal/Log.style";
import Input from "../../navbar/components/Input";

const FavoriteModal = () => {
  const { inputValue } = useAppSelector((store) => store.navbar);

  return (
    <FixedContainer>
      <Container>
        <h3>Pick a favorite film</h3>
        <IoMdClose />
        <form>
          <label>Name of Film</label>
          <Input value={inputValue} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default FavoriteModal;
