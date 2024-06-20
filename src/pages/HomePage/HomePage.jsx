
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../api/movies-api';


const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
    
  }, []);

 
  return (
    <div >
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;



