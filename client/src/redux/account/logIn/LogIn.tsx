import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../../../common/hooks";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsLogInOpen } from "../../navbar/navbarSlice";

const LogIn = () => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Modal>
        <IoMdClose onClick={() => dispatch(setIsLogInOpen(false))} />
      </Modal>
    </FixedContainer>
  );
};

export default LogIn;
