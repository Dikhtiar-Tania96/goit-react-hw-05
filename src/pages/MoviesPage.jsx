import { useEffect, useState } from "react";
import { searchMoviesApi } from "../api/movies-api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await searchMoviesApi("cat");
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
       }
    }
    getData()
  }, []);

  return (
    <div>
      {movies.length > 0 &&
        movies.map((movie) => {
          <div key={movie.id}>
            <h2><b>{movie.title}</b></h2>
            <p>{movie.popularity}</p>
          </div>;
        })}
    </div>
  );
};

export default MoviesPage;
