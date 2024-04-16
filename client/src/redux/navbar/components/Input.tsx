import React from "react";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { searchMovies, setInputValue, setIsModalOpen } from "../navbarSlice";

type InputProps = {
  value: string;
};

const Input: React.FC<InputProps> = ({ value }) => {
  const { isLogOpen } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));
    dispatch(searchMovies());
  };

  const handleClick = () => {
    if (isLogOpen) {
      dispatch(setIsModalOpen(true));
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter movie title..."
      onChange={handleInputChange}
      onClick={handleClick}
    />
  );
};

export default Input;
