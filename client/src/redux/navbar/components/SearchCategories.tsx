import React, { useState } from "react";

import { Categories } from "./SearchModal.styled";

const SearchCategories = () => {
  const [isClicked, setIsClicked] = useState({
    films: false,
    cast: false,
    lists: false,
    users: false
  });

  const handleClick = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const clickedTitle = (event.currentTarget as HTMLParagraphElement).title;

    setIsClicked((prevState) => ({
      ...prevState,
      [clickedTitle]: true
    }));
  };

  return (
    <Categories>
      <article>
        <p
          title="films"
          onClick={handleClick}
          style={{ fontWeight: isClicked.films ? "bold" : "normal" }}
        >
          Films
        </p>
        <p
          title="cast"
          onClick={handleClick}
          style={{ fontWeight: isClicked.films ? "bold" : "normal" }}
        >
          Cast & Crew
        </p>
        <p
          title="lists"
          onClick={handleClick}
          style={{ fontWeight: isClicked.films ? "bold" : "normal" }}
        >
          Lists
        </p>
        <p
          title="users"
          onClick={handleClick}
          style={{ fontWeight: isClicked.films ? "bold" : "normal" }}
        >
          Users
        </p>
      </article>
    </Categories>
  );
};

export default SearchCategories;
