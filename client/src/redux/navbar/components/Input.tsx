import axios from "axios";
import React from "react";

import { useAppDispatch } from "../../../common/hooks";
import { searchMovies, setInputValue, setIsModalOpen } from "../navbarSlice";

type InputProps = {
  value: string;
};

const Input: React.FC<InputProps> = ({ value }) => {
  const dispatch = useAppDispatch();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));
    dispatch(searchMovies());

    try {
      const response = await axios.post("http://localhost:3001/searchUsers", {
        query: value
      });
      const searchData = response.data;
      console.log(searchData);
    } catch (error) {
      console.error("Error searching users:", error);
    }
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
