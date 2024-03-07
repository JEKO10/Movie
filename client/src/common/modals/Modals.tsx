import React, { useRef, useState } from "react";

import LogIn from "../../redux/account/logIn/LogIn";
import SignUp from "../../redux/account/signUp/SignUp";
import LogModal from "../../redux/logModal/LogModal";
import MovieModal from "../../redux/logModal/MovieModal";
import SearchModal from "../../redux/navbar/components/SearchModal";
import Navbar from "../../redux/navbar/Navbar";
import { setIsModalOpen } from "../../redux/navbar/navbarSlice";
import { useAppDispatch, useAppSelector, useOutsideClick } from "../hooks";

const Modals = () => {
  const [isClosing, setIsClosing] = useState(false);
  const {
    inputValue,
    isModalOpen,
    isLogOpen,
    isMovieModalOpen,
    isLogInOpen,
    isSignUpOpen
  } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLElement>(null);

  useOutsideClick(modalRef, dispatch, setIsModalOpen);

  return (
    <section ref={modalRef}>
      <Navbar />
      {inputValue && isModalOpen && <SearchModal />}
      {isLogOpen && (
        <LogModal isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isMovieModalOpen && (
        <MovieModal isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isLogInOpen && <LogIn />}
      {isSignUpOpen && <SignUp />}
    </section>
  );
};

export default Modals;
