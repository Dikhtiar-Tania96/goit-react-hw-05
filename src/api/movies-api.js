import axios from "axios";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const searchMoviesApi = async (query) => {
  const {data} = await axios.get('/search/movie', {
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
};

export const searchMovieIdApi = async movieId => 
    searchMoviesApi(`/movie/${movieId}`);
    
export const fetchTrendingMovies = async () => {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
  };

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
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  };