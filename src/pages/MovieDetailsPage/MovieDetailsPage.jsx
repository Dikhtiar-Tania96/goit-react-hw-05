import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { searchMovieIdApi } from "../../api/movies-api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await searchMovieIdApi(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData()
  }, [movieId]);

  return (
    <div>
      {movie && (
        <ul>
          <h2>title: {movie.title}</h2>
          <h4>popularity: {movie.popularity}</h4>
          <p>release date: {movie.release_date}</p>
        </ul>
      )}

      <nav>
        <Link to='Cast'><MovieCast/></Link> 
        <Link to='Reviews'><MovieReviews/></Link> 
      </nav>
      <Outlet/>
    </div>
  );
};

export default MovieDetailsPage;
