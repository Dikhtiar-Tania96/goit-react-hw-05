import { useEffect } from "react";
import { searchMoviesApi } from "../api/movies-api";

const MoviesPage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await searchMoviesApi();
    };
    getData();
  }, []);

  return <div>MoviesPage</div>;
};

export default MoviesPage;
