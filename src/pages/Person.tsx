import SinglePerson from "../features/singlePerson/SinglePerson";
import { useParams, Link } from "react-router-dom";

const Person = () => {
  const { id } = useParams();

  return (
    <section className="person">
      <SinglePerson />
    </section>
  );
};

export default Person;
