import { useEffect } from "react";
import { getTrendingPeople } from "./trendingPeopleSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link } from "react-router-dom";

const Trending = () => {
  const { trendingPeople } = useAppSelector((store) => store.trendingPeople);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    dispatch(getTrendingPeople());
  }, []);

  return (
    <section className="trending">
      <div className="title">
        <h2>Popular people this week</h2>
      </div>
      <div className="underline"></div>
      <article>
        {trendingPeople.slice(0, 5).map(({ id, name, profile_path }) => (
          <Link to={`/person/${id}/${name}`} key={id} className="trendElement">
            <img src={posterUrl + profile_path} alt="Poster" />
            <div className="info">
              <h4>{name}</h4>
              {name?.length > 17 ? <div className="fade"></div> : ""}
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Trending;
