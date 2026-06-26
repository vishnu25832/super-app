import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async () => {
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${API_KEY}`
  );

  return response.data.articles;
};