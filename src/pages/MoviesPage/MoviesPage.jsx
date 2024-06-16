import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
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
        setError(false);
        const data = await searchMoviesApi(movieId || "car");
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
      <label htmlFor="filter">Search by film... </label>
      <input type="text" id="filter" />

      {/* {loading && <p>Завантаження...</p>}
      {error && <p>Помилка при завантаженні даних</p>} */}
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h2>
                  <b>{movie.title}</b>
                </h2>
                <p>{movie.popularity}</p>
                <Link to={String(movie.id)}>Details</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
