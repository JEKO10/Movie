import React, { useEffect, useRef } from "react";

import LogModal from "../redux/logModal/LogModal";
import SearchModal from "../redux/navbar/components/SearchModal";
import Navbar from "../redux/navbar/Navbar";
import { setIsModalOpen } from "../redux/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const Header = () => {
  const { inputValue, isModalOpen, isLogOpen } = useAppSelector(
    (state) => state.navbar
  );
  const dispatch = useAppDispatch();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        dispatch(setIsModalOpen(false));
      }
    };

    document.addEventListener("mousedown", clickOutside, true);

    return () => {
      document.removeEventListener("mousedown", clickOutside, true);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <Navbar />
      {inputValue && isModalOpen && <SearchModal />}
      {isLogOpen && <LogModal />}
    </header>
  );
};

export default Header;
