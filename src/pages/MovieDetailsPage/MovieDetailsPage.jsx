import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import css from './MovieDetailsPage.module.css'
const baseURL = 'https://api.themoviedb.org/3'; // Заміни на свій baseURL
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A'; // Заміни на свій API_TOKEN
export const fetchMovieDetails = async (movieId) => {
    try {
        const { data } = await axios.get(`${baseURL}/movie/${movieId}`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            }
        });
        return data;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const movieData = await fetchMovieDetails(movieId);
                setMovie(movieData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getMovieDetails();
    }, [movieId]);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [movie]);
    if (error) return <p>Error loading movie details: {error.message}</p>;
    return (
        <div ref={containerRef}>
            {loading && <Loader />}
            {movie && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                    <div className={css.movieDetailsTitle}>
                        <h1 className={css.titleMovie}>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <p><b>Release Date:</b> {movie.release_date}</p>
                        <p><b>Rating:</b> {movie.vote_average}</p>
                    </div>
                    <div className={css.addInfoMovie}>
                        <p className={css.addTitleMovie}>Additional information: </p>
                        <ul className={css.listMovie}>
                            <li><Link to='Cast' state={{ from: location }}>Cast</Link></li>
                            <li><Link to='Reviews' state={{ from: location }}>Reviews</Link></li>
                        </ul>
                        <Outlet />
                    </div>
                </div>
            )}
        </div>
    );
};
export default MovieDetailsPage;