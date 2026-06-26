import { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsApi";

const NewsWidget = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await fetchNews();
        setArticles(news);
      } catch (err) {
        console.error(err);
        setError("Failed to load news.");
      }
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (error) {
    return (
      <div className="bg-zinc-900 p-5 rounded-xl">
        {error}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="bg-zinc-900 p-5 rounded-xl">
        Loading News...
      </div>
    );
  }

  const article = articles[currentIndex];

  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-3">
        Latest News
      </h2>

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="rounded mb-3 h-40 w-full object-cover"
        />
      )}

      <h3 className="font-semibold mb-2">
        {article.title}
      </h3>

      <p className="text-sm text-gray-300">
        {article.description}
      </p>

      <p className="text-xs text-gray-500 mt-3">
        {article.source.name}
      </p>
    </div>
  );
};

export default NewsWidget;