import React from "react";

import { useAppDispatch } from "../../../common/hooks";
import { searchMovies, setInputValue, setIsModalOpen } from "../navbarSlice";

type InputProps = {
  value: string;
};

const Input: React.FC<InputProps> = ({ value }) => {
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));
    dispatch(searchMovies());
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter movie title..."
      onChange={handleInputChange}
      onClick={() => dispatch(setIsModalOpen(true))}
    />
  );
};

export default Input;
