import React, { useEffect, useRef } from "react";

import { useAppDispatch } from "../../common/hooks";
import { setIsMovieModalOpen } from "../navbar/navbarSlice";
import { FixedContainer, LogModal } from "./Log.style";

const MovieModal = () => {
  const dispatch = useAppDispatch();
  const movieRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!movieRef.current?.contains(e.target as Node)) {
        dispatch(setIsMovieModalOpen(false));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <FixedContainer>
      <LogModal ref={movieRef}>Aleksa</LogModal>
    </FixedContainer>
  );
};

export default MovieModal;
