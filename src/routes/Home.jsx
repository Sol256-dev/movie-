import { useLoaderData, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const media = useLoaderData();
  const navigation = useNavigate();

    if (navigation.state === "loading") return <h4>loading</h4>;
    return (
      <>
        <section>
          <div className="heading">
            <h3>What is Trending</h3>
          </div>
          <div className="cards">
            {media.data && media.data.map((item) => (
              <MovieCard title={item.medianame} poster={item.posterpath} />
            ))}
          </div>
        </section>
      </>
    );
};

export default Home;

export const fetchData = async () => {
  const results = await fetch(`https://media-hub.onrender.com/api/v1/media`);

  const data = await results.json();
  console.log(data);

  return {data};
};
