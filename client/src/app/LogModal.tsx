import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../common/hooks";
import { setIsLogOpen } from "../redux/navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal = () => {
  const dispatch = useAppDispatch();
  const logModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!logModalRef.current?.contains(e.target as Node)) {
        dispatch(setIsLogOpen(false));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <FixedContainer>
      <Container ref={logModalRef}>
        <h3>Add to your films…</h3>
        <IoMdClose onClick={() => dispatch(setIsLogOpen(false))} />
        <form>
          <label>Name of Film</label>
          <input type="text" />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
