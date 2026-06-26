import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export const fetchMovies = async (search) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
  );

  return response.data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
  );

  return response.data;
};
console.log("OMDb Key:", API_KEY);