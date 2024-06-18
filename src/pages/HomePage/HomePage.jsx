import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { fetchTrendingMovies } from "../../api/movies-api";
import Loader from "../../Loader/Loader";
import css from './HomePage.module.css'

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
        const data = await fetchTrendingMovies("");
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
      <h1 className={css.titlePage}>Trending today🎬</h1>
      {loading && <p><Loader/></p>}
      {error && <p>Упс,помилка при завантаженні даних</p>}
      <ul className={css.listFilms}>
        {movies.map((movie) => {
            return (
              <li key={movie.id} className={css.itemFilms}>
                <Link to={`/movies/${movie.id}`} className={css.linkFilms}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <h2 className={css.nameFilm}>{movie.title} </h2>               
                <p className={css.nameFilmText}>{movie.release_date}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
