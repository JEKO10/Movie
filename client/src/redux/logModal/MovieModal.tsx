import React, { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { setIsMovieModalOpen } from "../navbar/navbarSlice";
import { FixedContainer, LogModal } from "./Log.style";

const MovieModal = () => {
  const selectedMovieId = useAppSelector(
    (state) => state.navbar.selectedMovieId
  );
  const dispatch = useAppDispatch();
  const movieRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!movieRef.current?.contains(e.target as Node)) {
        dispatch(setIsMovieModalOpen({ isOpen: false, id: selectedMovieId }));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <FixedContainer>
      <LogModal ref={movieRef}>
        <p onClick={() => console.log(selectedMovieId)}>Aleksa</p>
      </LogModal>
    </FixedContainer>
  );
};

export default MovieModal;
