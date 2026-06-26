import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city = "Hyderabad") => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  return response.data;
};

console.log(import.meta.env.VITE_WEATHER_API_KEY);