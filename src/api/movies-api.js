import axios from "axios";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhYTQwMWMyODBhNTgzZTFmMzE2NGZjMWVkYTg1OSIsInN1YiI6IjY2NmEwMGNlZjM3ZDA2OTRiMmVhMTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVLPpxQfRI2FZQnZBlywo3QUFxCzxHSlUCtx9DFQ-8A";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchMoviesApi = async (query) => {
  const {data} = await axios.get(`/search/movies`, {
    params: {
      query,
      language: "en",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data;
};

