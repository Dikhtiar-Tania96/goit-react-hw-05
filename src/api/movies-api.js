import axios from "axios";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A";

const baseURL = 'https://api.themoviedb.org/3';

export const searchMoviesApi = async (query) => {
  try {
      const {data} = await axios.get(`${baseURL}/search/movie`, {
    params: {
      query,
      language: "en-US",
      page: 1
        },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data.results;
  } catch (error) {
    console.log('API request error:', error);
    throw error;
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const {data} = await axios.get(`${baseURL}/trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      }
    });
return data.results
  } catch (error) {
    console.error('API request error:', error)
    throw error;  
  }
  };


export const searchMovieIdApi = async movieId => 
    searchMoviesApi(`/movie/${movieId}`);
    


  export const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
  };
  export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  };
  export const fetchMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  };

  export const fetchMovieReviews = async (movieId) => {
    try {
      const {data} = await axios.get(`${baseURL}/movie/${movieId}/reviews`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }
      });
      return data.results;
    } catch (error) {
      console.error('API request error:', error)
  throw error;
    }
  };