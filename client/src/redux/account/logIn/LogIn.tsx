import React from "react";

import { useAppDispatch } from "../../../common/hooks";
import { FixedContainer } from "../../logModal/Log.style";
import { setIsLogInOpen } from "../../navbar/navbarSlice";

const LogIn = () => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <button onClick={() => dispatch(setIsLogInOpen(false))}>Close</button>
    </FixedContainer>
  );
};

export default LogIn;
