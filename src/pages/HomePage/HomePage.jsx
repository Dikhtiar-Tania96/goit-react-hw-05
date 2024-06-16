import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { fetchTrendingMovies } from "../../api/movies-api";

const HomePage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingMovies("car");
        setMovies(data);
      } catch (error) {
        setError(true);
        console.error('Error fetching trending movies:', error)
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <p>Зачекайте,йде завантаження...</p>}
      {error && <p>Упс,помилка при завантаженні даних</p>}
      <ul>
        {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
