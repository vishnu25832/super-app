import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/weatherApi";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather("Hyderabad");
        setWeather(data);
      } catch (err) {
        setError("Weather API failed");
        console.error(err);
      }
    };

    loadWeather();
  }, []);

  if (error) {
    return (
      <div className="bg-zinc-900 p-5 rounded-xl">
        {error}
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-zinc-900 p-5 rounded-xl">
        Loading Weather...
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Weather
      </h2>

      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Pressure: {weather.main.pressure}</p>
      <p>Wind Speed: {weather.wind.speed}</p>
      <p>Condition: {weather.weather[0].main}</p>
    </div>
  );
};

export default WeatherWidget;