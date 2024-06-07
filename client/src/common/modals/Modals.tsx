import React, { useState } from "react";

import LogIn from "../../redux/account/logIn/LogIn";
import SignUp from "../../redux/account/signUp/SignUp";
import LogModal from "../../redux/logModal/LogModal";
import MovieModal from "../../redux/logModal/MovieModal";
import SearchModal from "../../redux/navbar/components/SearchModal";
import Navbar from "../../redux/navbar/Navbar";
import { setIsModalOpen } from "../../redux/navbar/navbarSlice";
import FavoriteModal from "../../redux/profile/settings/components/FavoriteModal";
import FixedNavMenu from "../FixedNavMenu";
import { useAppSelector, useOutsideClick } from "../hooks";

const Modals = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { inputValue, isLogOpen, isMovieModalOpen, isLogInOpen, isSignUpOpen } =
    useAppSelector((state) => state.navbar);
  const { isFavoriteOpen } = useAppSelector((state) => state.profile);

  const { ref } = useOutsideClick(setIsModalOpen);

  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section ref={ref}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <FixedNavMenu />}
      {inputValue && (isLogOpen || isFavoriteOpen) && (
        <SearchModal setIsClosing={setIsClosing} isClosing={false} />
      )}
      {isLogOpen && (
        <LogModal isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isMovieModalOpen && (
        <MovieModal isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isLogInOpen && (
        <LogIn isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isSignUpOpen && (
        <SignUp isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
      {isFavoriteOpen && (
        <FavoriteModal isClosing={isClosing} setIsClosing={setIsClosing} />
      )}
    </section>
  );
};

export default Modals;
