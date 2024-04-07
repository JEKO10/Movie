import axios from "axios";
import React, { useEffect, useState } from "react";

import { Fade } from "../../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { SearchData, UserData } from "../../../common/types/typesTS";
import { setIsModalOpen, setIsMovieModalOpen } from "../navbarSlice";
import { MovieInfo, SearchedData, SingleMovie } from "./SearchModal.styled";

const SearchModal = () => {
  const { searchData, inputValue, isLogOpen, category } = useAppSelector(
    (store) => store.navbar
  );
  const [users, setUsers] = useState<UserData[]>([
    {
      id: 0,
      username: "",
      email: ""
    }
  ]);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w92/";

  useEffect(() => {
    axios.get("http://localhost:3001/searchUsers").then((response) => {
      setUsers(response.data);
    });
  }, [inputValue]);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (category === "users") {
    return (
      <SearchedData isLogOpen={isLogOpen}>
        {filteredUsers
          .filter((user) =>
            user.username.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((user) => (
            <SingleMovie key={user.id} isLogOpen={isLogOpen} to={"#"}>
              <div>
                <MovieInfo>{user.username}</MovieInfo>
              </div>
            </SingleMovie>
          ))}
        {filteredUsers.length === 0 && inputValue && (
          <p>No user matches for your search term.</p>
        )}
      </SearchedData>
    );
  }
  return (
    <SearchedData isLogOpen={isLogOpen}>
      {searchData?.map((movie: SearchData) => {
        const {
          id,
          profile_path,
          poster_path,
          title,
          name,
          release_date,
          media_type
        } = movie;

        return (
          <SingleMovie
            key={id}
            isLogOpen={isLogOpen}
            to={
              isLogOpen
                ? "#"
                : media_type === "movie"
                  ? `/movie/${id}`
                  : `/person/${id}`
            }
            onClick={
              isLogOpen
                ? () => dispatch(setIsMovieModalOpen({ isOpen: true, id }))
                : () => dispatch(setIsModalOpen(false))
            }
          >
            {!isLogOpen && (
              <img
                src={
                  poster_path || profile_path
                    ? posterUrl + (profile_path || poster_path)
                    : import.meta.env.VITE_IMG
                }
                alt="POSTER"
              />
            )}
            <div>
              <MovieInfo>{title || name}</MovieInfo>
              <MovieInfo>{release_date?.slice(0, 4)}</MovieInfo>
              <Fade isTrending={false} />
            </div>
          </SingleMovie>
        );
      })}
      {searchData.length === 0 && inputValue && (
        <p>There were no matches for your search term.</p>
      )}
    </SearchedData>
  );
};

export default SearchModal;
