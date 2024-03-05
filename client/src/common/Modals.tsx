import React, { useEffect, useRef } from "react";

import LogModal from "../redux/logModal/LogModal";
import MovieModal from "../redux/logModal/MovieModal";
import SearchModal from "../redux/navbar/components/SearchModal";
import Navbar from "../redux/navbar/Navbar";
import { setIsModalOpen } from "../redux/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const Modals = () => {
  const { inputValue, isModalOpen, isLogOpen, isMovieModalOpen } =
    useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        dispatch(setIsModalOpen(false));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <section ref={modalRef}>
      <Navbar />
      {inputValue && isModalOpen && <SearchModal />}
      {isLogOpen && <LogModal />}
      {isMovieModalOpen && <MovieModal />}
    </section>
  );
};

export default Modals;
