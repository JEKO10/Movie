import React, { useState } from "react";

import { secondaryColor } from "../../../assets/style/GlobalStyles";
import { useAppDispatch } from "../../../common/hooks";
import { searchMovies, setCategory } from "../navbarSlice";
import { Categories } from "./SearchModal.styled";

const SearchCategories = () => {
  const [isClicked, setIsClicked] = useState({
    all: false,
    movie: false,
    person: false,
    users: false
  });
  const dispatch = useAppDispatch();

  const clickHandle = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const clickedTitle = (event.currentTarget as HTMLParagraphElement).title;

    dispatch(setCategory(clickedTitle));
    dispatch(searchMovies());

    setIsClicked({
      all: false,
      movie: false,
      person: false,
      users: false
    });

    setIsClicked((prevState) => ({
      ...prevState,
      [clickedTitle]: true
    }));
  };

  return (
    <Categories>
      <article>
        <p
          title="all"
          onClick={clickHandle}
          style={{
            backgroundColor: isClicked.all ? secondaryColor : "transparent"
          }}
        >
          All
        </p>
        <p
          title="movie"
          onClick={clickHandle}
          style={{
            backgroundColor: isClicked.movie ? secondaryColor : "transparent"
          }}
        >
          Movies
        </p>
        <p
          title="person"
          onClick={clickHandle}
          style={{
            backgroundColor: isClicked.person ? secondaryColor : "transparent"
          }}
        >
          Person
        </p>
        <p
          title="users"
          onClick={clickHandle}
          style={{
            backgroundColor: isClicked.users ? secondaryColor : "transparent"
          }}
        >
          Users
        </p>
      </article>
    </Categories>
  );
};

export default SearchCategories;
