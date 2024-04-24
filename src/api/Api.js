import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTkzYjc0NTQ1ODVlYWY0NzhjNmQ2MTVmMzAzOTU3ZiIsInN1YiI6IjY2MjYwNmZmMmRkYTg5MDE4N2UzNTRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr9aABTOP7IHUtjomPnr9i9mVIa4bntIo_CE1UtLNKY";

const BASE_URL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const fetchTrendingMovies = async () => {
  const url = BASE_URL + "3/trending/movie/day";
  const response = await axios.get(url, options);
  return response;
};

export const fetchSearchMovie = async (query) => {
  const url = BASE_URL + `3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieDetails = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieCast = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieReviews = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};