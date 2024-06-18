// import { useSearchParams } from "react-router-dom"

// const MoviesPage = () => {

//   const [params, setParams] = useSearchParams()
//   console.log('params', params.get('search'))
//   return (
//     <div>
//       <label htmlFor="search">Search by film... </label>
//       <input type="text" id="search"/>
//     </div>
//   )
// }

// export default MoviesPage


import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/movies-api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      if (query) {
        fetchMovies(query);
      }
    }, [query]);
  
    const fetchMovies = async (query) => {
      try {
        searchMovies(query).then(setMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    const handleSearch = async (e) => {
      e.preventDefault();
      const form = e.target;
      const newQuery = form.elements.query.value;
      setSearchParams({ query: newQuery });
      setQuery(newQuery);
    
    };
  
    return (
      <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit"> Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
    );
  };
  
  export default MoviesPage;
 