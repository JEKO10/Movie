import TrendingMovie from "../features/trendingMovie/TrendingMovie";
import TrendingPeople from "../features/trendingPeople/TrendingPeople";

const Home = () => {
  return (
    <section className="home">
      <TrendingMovie />
      <TrendingPeople />
    </section>
  );
};

export default Home;
