const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-zinc-900 text-white rounded-xl p-6 max-w-4xl w-[90%] flex gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-64 rounded-lg"
          />
  
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              {movie.Title}
            </h2>
  
            <p><strong>Genre:</strong> {movie.Genre}</p>
  
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
  
            <p><strong>IMDb:</strong> ⭐ {movie.imdbRating}</p>
  
            <p><strong>Actors:</strong> {movie.Actors}</p>
  
            <p className="mt-5 text-gray-300">
              {movie.Plot}
            </p>
  
            <button
              onClick={onClose}
              className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieModal;