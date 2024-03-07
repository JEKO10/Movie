import React from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../../../common/hooks";
import { FixedContainer, Modal } from "../../logModal/Log.style";
import { setIsSignUpOpen } from "../../navbar/navbarSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Modal>
        <IoMdClose onClick={() => dispatch(setIsSignUpOpen(false))} />
      </Modal>
    </FixedContainer>
  );
};

export default SignUp;
