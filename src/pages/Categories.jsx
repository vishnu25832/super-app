import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const Categories = () => {
  const navigate = useNavigate();

  const setCategories = useStore(
    (state) => state.setCategories
  );

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Music",
    "Sports",
    "Thriller",
    "Fantasy",
    "Romance",
  ];

  const [selected, setSelected] = useState([]);

  const handleSelect = (genre) => {
    if (selected.includes(genre)) {
      setSelected(
        selected.filter((item) => item !== genre)
      );
    } else {
      setSelected([...selected, genre]);
    }
  };

  const handleContinue = () => {
    setCategories(selected);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Select Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {genres.map((genre) => (
          <div
            key={genre}
            onClick={() =>
              handleSelect(genre)
            }
            className={`p-6 rounded-xl cursor-pointer text-center font-bold transition duration-300
            ${
              selected.includes(genre)
                ? "bg-green-500"
                : "bg-zinc-800"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="mb-4">
          Selected: {selected.length}
        </p>

        {selected.length < 3 && (
          <p className="text-red-500 mb-4">
            Select at least 3 categories
          </p>
        )}

        <button
          onClick={handleContinue}
          disabled={selected.length < 3}
          className={`px-8 py-3 rounded font-bold
          ${
            selected.length >= 3
              ? "bg-green-500"
              : "bg-gray-600"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Categories;