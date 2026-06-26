const MovieCard = ({ movie, onClick }) => {
    return (
      <div
        onClick={() => onClick(movie.imdbID)}
        className="cursor-pointer hover:scale-105 transition duration-300 min-w-[180px]"
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-xl"
        />
  
        <p className="mt-2 font-medium">
          {movie.Title}
        </p>
      </div>
    );
  };
  
  export default MovieCard;