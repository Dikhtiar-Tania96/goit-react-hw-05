import{ useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

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
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading movie details: {error.message}</p>;

    return (
        <div>
            {movie && (
                <div>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Rating:</b> {movie.vote_average}</p>
                    </div>
                    <div>
                      <p>Additional information: </p>
                    <ul>
                      <li><Link to='Cast'>Cast</Link></li> 
                      <li><Link to='Reviews'>Reviews</Link></li>
                    </ul> 
                    <Outlet/>
                    </div>

                </div>
            )}
        </div>

       
    );
};

export default MovieDetailsPage;



// import { useEffect, useState } from "react";
// import { Link, Outlet, useParams } from "react-router-dom";
// import { searchMovieIdApi } from "../../api/movies-api";
// import MovieCast from "../../components/MovieCast/MovieCast";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         setError(false)
//         const data = await searchMovieIdApi(movieId);
//         setMovie(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData()
//   }, [movieId]);


//   return (
//     <div>
//       <Link to='/movies'>Go back...</Link>
//       {movie && 
//         <ul>
//           <h2>title: {movie.title}</h2>
//           <h4>popularity: {movie.popularity}</h4>
//           <p>release date: {movie.release_date}</p>
//         </ul>
// }
//       <nav>
//         <Link to='Cast'><MovieCast/></Link> 
//         <Link to='Reviews'><MovieReviews/></Link> 
//       </nav>
//       <Outlet/>
//     </div>
//   );
// };

// export default MovieDetailsPage;
