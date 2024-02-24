import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../common/hooks";
import { setIsLogOpen } from "../redux/navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal = () => {
  const dispatch = useAppDispatch();
  const [isClosing, setIsClosing] = useState(false);
  const logModalRef = useRef<HTMLDivElement>(null);

  const handleExit = () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch(setIsLogOpen(false));
    }, 300);
  };

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!logModalRef.current?.contains(e.target as Node)) {
        handleExit();
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, [dispatch]);

  return (
    <FixedContainer>
      <Container ref={logModalRef} isClosing={isClosing}>
        <h3>Add to your films…</h3>
        <IoMdClose onClick={() => handleExit()} />
        <form>
          <label>Name of Film</label>
          <input type="text" />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
