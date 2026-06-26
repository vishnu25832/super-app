import { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsApi";

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (!news.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [news]);

  if (!news.length) {
    return (
      <div className="bg-zinc-900 rounded-xl p-5">
        <h2 className="text-2xl font-bold mb-3">Latest News</h2>
        <p>Loading news...</p>
      </div>
    );
  }

  const article = news[index];

  return (
    <div className="bg-zinc-900 rounded-xl p-5">
      <h2 className="text-2xl font-bold mb-3">Latest News</h2>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-52 object-cover rounded-lg mb-3"
        />
      )}

      <h3 className="font-bold text-lg">
        {article.title}
      </h3>

      <p className="text-gray-300 mt-2">
        {article.description}
      </p>

      <p className="text-sm text-gray-400 mt-3">
        Source: {article.source_name}
      </p>
    </div>
  );
};

export default NewsWidget;