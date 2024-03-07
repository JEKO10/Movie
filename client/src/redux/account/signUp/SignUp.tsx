import React from "react";

import { useAppDispatch } from "../../../common/hooks";
import { FixedContainer } from "../../logModal/Log.style";
import { setIsSignUpOpen } from "../../navbar/navbarSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <button onClick={() => dispatch(setIsSignUpOpen(false))}>Close</button>
    </FixedContainer>
  );
};

export default SignUp;
