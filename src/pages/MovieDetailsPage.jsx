import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMoviesApi } from "../api/movies-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await searchMoviesApi(movieId);
        setMovie(data);
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
      {movie && (
        <ul>
          <h2>title: {movie.title}</h2>
          <p>release date: {movie.release_date}</p>
          <h4>popularity: {movie.popularity}</h4>
        </ul>
      )}
    </div>
  );
};

export default MovieDetailsPage;
