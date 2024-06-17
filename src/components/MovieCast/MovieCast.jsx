// MovieCast.js
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../api/movies-api';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCredits();
        setCast(response.data.cast);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cast: {error.message}</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <p><strong>{actor.name}</strong> as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;







// import { useEffect, useState } from "react";
// import { fetchMovieCredits } from "../../api/movies-api";
// import { useParams } from "react-router-dom";

// const MovieCast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// useEffect(()=>{
//   const searchCast = async () =>{
//     try {
//       const castData = await fetchMovieCredits(movieId);
//       setCast(castData)
//     } catch (error) {
//       setError(error);
//     }finally{
//       setLoading(true)
//     }
//   }
//   searchCast()
// }, [movieId])

// return (

// )



// }


// export default MovieCast

// //   // const defaultImg = 'https://cs13.pikabu.ru/post_img/2023/03/15/1/1678835880126870357.jpg'
// //   return (
// //     <div>Cast</div>
// //   )
// // }