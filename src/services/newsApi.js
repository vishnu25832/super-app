import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async () => {
  const response = await axios.get(
    `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in&language=en&category=top`
  );

  return response.data.results || [];
};