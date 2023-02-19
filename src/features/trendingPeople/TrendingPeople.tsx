import { useEffect } from "react";
import { getTrendingPeople } from "./trendingPeopleSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";

const Trending = () => {
  const { trendingPeople } = useAppSelector((state) => state.trendingPeople);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrendingPeople());
    console.log(trendingPeople);
  }, []);

  return (
    <section className="trending">
      <div className="title">
        <h2>Popular people this week</h2>
      </div>
      <div className="underline"></div>
      <article>
        {trendingPeople.slice(0, 5).map(({ id, name, profile_path }) => (
          <div key={id} className="trendElement">
            <img src={posterUrl + profile_path} alt="Poster" />
            <div className="info">
              <h4>{name}</h4>
              {name?.length > 17 ? <div className="fade"></div> : ""}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Trending;
