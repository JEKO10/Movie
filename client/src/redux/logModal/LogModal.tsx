import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import {
  searchMovies,
  setInputValue,
  setIsLogOpen,
  setIsLogSearchOpen
} from "../navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useAppDispatch();
  const logModalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
    dispatch(searchMovies());
    dispatch(setIsLogSearchOpen(true));
  };

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
          <input type="text" onChange={handleInputChange} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
