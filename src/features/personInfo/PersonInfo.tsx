import React, { useEffect } from "react";
import { getPerson, toggleBio } from "./personInfoSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { useParams } from "react-router-dom";
import { Person, PersonImg } from "../../assets/style/Person.style";

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
    imdb_id,
  } = useAppSelector((store) => store.personInfo.personInfo);
  const { isBioOpen } = useAppSelector((store) => store.personInfo);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getPerson(id!));
  }, [id]);

  return (
    <Person>
      <PersonImg src={posterUrl + profile_path} alt="POSTER" />
      <h2>{name}</h2>
      <h4>Date of birth: {birthday}</h4>
      {deathday ? <h4>Date of death: {deathday}</h4> : ""}
      <h4>Gender: {gender === 2 ? "Male" : "Female"}</h4>
      <h4>Known for: {known_for_department}</h4>
      <h4>Place of birth: {place_of_birth}</h4>
      {isBioOpen ? (
        <p>{biography ? biography : `No credits for ${name}.`}</p>
      ) : (
        ""
      )}
      <h5 onClick={() => dispatch(toggleBio())}>
        {isBioOpen ? "Close" : "Open"} full biography
      </h5>
    </Person>
  );
};

export default PersonInfo;
