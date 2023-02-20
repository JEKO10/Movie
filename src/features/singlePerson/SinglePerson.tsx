import { useEffect } from "react";
import { getPerson } from "./singlePersonSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { useParams } from "react-router-dom";

const SinglePerson = () => {
  const {
    name,
    biography,
    birthday,
    deathday,
    gender,
    known_for_department,
    place_of_birth,
    popularity,
    profile_path,
  } = useAppSelector((store) => store.singlePerson.personInfo);
  const { personInfo } = useAppSelector((store) => store.singlePerson);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    dispatch(getPerson(id));
    console.log(personInfo);
  }, [personInfo.name]);

  return (
    <section className="person">
      <div>
        <img src={posterUrl + profile_path} alt="POSTER" />
        <h2>{name}</h2>
        <h2>Date of birth: {birthday}</h2>
        {deathday ? <h2>Date of death: {deathday}</h2> : ""}
        <h2>Gender: {gender === 2 ? "Male" : "Female"}</h2>
        <h2>Known for: {known_for_department}</h2>
        <h2>Place of birth: {place_of_birth}</h2>
        <h2>Popularity: {popularity}</h2>
      </div>
      <h2>{biography}</h2>
    </section>
  );
};

export default SinglePerson;
