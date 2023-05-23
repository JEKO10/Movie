import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { MoviesList } from "../../assets/style/DiscoverMovies.styled";
import { FullBio, Person, PersonImg } from "../../assets/style/Person.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { setQuery } from "../navbar/navbarSlice";
import { getMovies, getPerson, toggleBio } from "./personInfoSlice";

const PersonInfo = () => {
  const {
    name,
    biography,
    birthday,
    deathday,
    gender,
    known_for_department,
    place_of_birth,
    profile_path,
    // imdb_id,
  } = useAppSelector((store) => store.personInfo.personInfo);
  const { isLoading, isBioOpen, personMovies } = useAppSelector(
    (store) => store.personInfo
  );
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const posterUrl = "https://image.tmdb.org/t/p/w342/";

  useEffect(() => {
    dispatch(getPerson(id));
    dispatch(getMovies(id));
    dispatch(toggleBio(false));
    dispatch(setQuery("Person"));
    console.log(personMovies);
  }, [id]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Person>
      <MoviesList isCollection={false}>
        {personMovies.length !== 0 ? (
          personMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img
                loading="lazy"
                src={
                  movie.poster_path
                    ? posterUrl + movie.poster_path
                    : import.meta.env.VITE_IMG
                }
                alt="Poster"
              />
            </Link>
          ))
        ) : (
          <p>No movies found for this person.</p>
        )}
      </MoviesList>
      <article>
        <PersonImg
          src={
            profile_path ? posterUrl + profile_path : import.meta.env.VITE_IMG
          }
          alt="POSTER"
        />
        <h2>{name}</h2>
        <h4>Date of birth: {birthday}</h4>
        {deathday ? <h4>Date of death: {deathday}</h4> : ""}
        <h4>Gender: {gender === 2 ? "Male" : "Female"}</h4>
        <h4>Known for: {known_for_department}</h4>
        <h4>Place of birth: {place_of_birth}</h4>
        {isBioOpen ? (
          <p
            dangerouslySetInnerHTML={{
              __html: biography.replace(/\n/g, "<br>"),
            }}
          />
        ) : (
          ""
        )}
        <FullBio onClick={() => dispatch(toggleBio(!isBioOpen))}>
          {isBioOpen ? "Close" : "Open"} full biography
        </FullBio>
      </article>
    </Person>
  );
};

export default PersonInfo;
