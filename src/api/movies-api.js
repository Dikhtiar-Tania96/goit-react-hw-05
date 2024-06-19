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
    }});
  return data.results;
  } catch (error) {
    console.log('API request error:', error);
    throw error;
  }};



export const fetchTrendingMovies = async () => {
  try {
    const {data} = await axios.get(`${baseURL}/trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      }});
return data.results
  } catch (error) {
    console.error('API request error:', error)
    throw error;  
  }};


  export const searchMovieIdApi = async movieId => 
    fetchTrendingMovies(`/movie/${movieId}`);


    
    
  export const searchMovies = async (query) => {
    try {
      const {data} = await axios.get(`${baseURL}/search/movie?query=${query}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }});
      return data.results;
    } catch (error) {
      console.error('API request error:', error)
  throw error}};




  export const fetchMovieDetails = async (movieId) => {
    try {
      const {data} = await axios.get(`${baseURL}/movie/${movieId}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }});
      return data;
    } catch (error) {
      console.error('API request error:', error)
  throw error}};






  export const fetchMovieCredits = async (movieId) => {
    try {
      const {data} = await axios.get(`${baseURL}/movie/${movieId}/credits`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }});
      return data.cast;
    } catch (error) {
      console.error('API request error:', error)
  throw error;
    }};



   export const fetchMovieReviews = async (movieId) => {
    try {
      const {data} = await axios.get(`${baseURL}/movie/${movieId}/reviews`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }});
      return data.results;
    } catch (error) {
      console.error('API request error:', error)
  throw error;
    }};