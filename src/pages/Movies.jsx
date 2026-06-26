import { useEffect, useState } from "react";
import useStore from "../store/useStore";
import {
  fetchMovies,
  fetchMovieDetails,
} from "../services/movieApi";

import MovieCard from "../components/movies/MovieCard";
import MovieModal from "../components/movies/MovieModal";

const Movies = () => {
  const categories = useStore((state) => state.categories);

  const [movies, setMovies] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const result = {};

      for (const category of categories) {
        result[category] = await fetchMovies(category);
      }

      setMovies(result);
    };

    loadMovies();
  }, [categories]);

  const openMovie = async (id) => {
    const movie = await fetchMovieDetails(id);
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Entertainment
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-10">

          <h2 className="text-2xl font-bold mb-5">
            {category}
          </h2>

          <div className="flex gap-5 overflow-x-auto">

            {movies[category]?.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onClick={openMovie}
              />
            ))}

          </div>
        </div>
      ))}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
};

export default Movies;