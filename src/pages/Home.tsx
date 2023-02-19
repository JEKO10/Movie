import TrendingMovies from "../features/trendingMovies/TrendingMovies";
import TrendingPeople from "../features/trendingPeople/TrendingPeople";

const Home = () => {
  return (
    <section className="home">
      <TrendingMovies />
      <TrendingPeople />
    </section>
  );
};

export default Home;
