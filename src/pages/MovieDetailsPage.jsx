import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieIdApi } from "../api/movies-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await searchMovieIdApi(movieId);
    }
    getData()
  }, [movieId]);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
