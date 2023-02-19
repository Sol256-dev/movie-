import { useLoaderData, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const trend = useLoaderData();
  const navigation = useNavigate();

  if (navigation.state === "loading") return <h4>loading</h4>;
  return (
    <>
      <section>
        <div className="heading">
          <h3>Trending Movies</h3>
        </div>
        <div className="cards">
          {trend.trending.map((item) => (
            <MovieCard title={item.title} poster={item.poster_path} />
          ))}
        </div>
      </section>

      <section>
        <div className="heading">
          <h3>Coming soon</h3>
        </div>
        <div className="cards">
          {trend.upcoming.map((item) => (
            <MovieCard title={item.title} poster={item.poster_path} />
          ))}
        </div>
      </section>

      <section>
        <div className="heading">
          <h3>Top-rated</h3>
        </div>
        <div className="cards">
          {trend.toprated.map((item) => (
            <MovieCard title={item.title} poster={item.poster_path} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

export const fetchData = async () => {
  const res1 = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  );
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=10`
  );
  const res3 = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=10`
  );
  const data1 = await res1.json();
  const data2 = await res2.json();
  const data3 = await res3.json();

  return {
    trending: data1.results,
    upcoming: data2.results,
    toprated: data3.results,
  };
};
