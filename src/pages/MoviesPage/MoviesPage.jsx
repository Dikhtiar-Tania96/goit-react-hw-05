import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchMoviesApi } from "../../api/movies-api";

const MoviesPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await searchMoviesApi("car ");
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul> {loading && <p>Завантаження...</p>}
      {error && <p>Помилка при завантаженні даних</p>}
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <li><h2><b>{movie.title}</b></h2></li>
              <p>{movie.popularity}</p>
              <Link to={String(movie.id)}>Details</Link>
            </div>
          )
        })}</ul>
    </div>
  );
};

export default MoviesPage;