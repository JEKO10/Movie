import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import Input from "../navbar/components/Input";
import { setIsLogOpen, setIsMovieModalOpen } from "../navbar/navbarSlice";
import { FixedContainer, LogModal as Container } from "./Log.style";

const LogModal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const { inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();
  const logModalRef = useRef<HTMLDivElement>(null);

  const handleExit = () => {
    setIsClosing(true);
    dispatch(setIsMovieModalOpen(true));

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
          <Input value={inputValue} />
        </form>
      </Container>
    </FixedContainer>
  );
};

export default LogModal;
