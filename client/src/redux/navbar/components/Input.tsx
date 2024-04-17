import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { searchMovies, setInputValue, setIsModalOpen } from "../navbarSlice";

type InputProps = {
  value: string;
};

const Input: React.FC<InputProps> = ({ value }) => {
  const { isLogOpen, inputValue } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${inputValue}`);
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter movie title..."
      onChange={handleInputChange}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
