import { useEffect } from "react";
import useStore from "../../store/useStore";

const NotesWidget = () => {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  useEffect(() => {
    const savedNotes =
      localStorage.getItem("notes") || "";

    setNotes(savedNotes);
  }, []);

  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-3">
        Notes
      </h2>

      <textarea
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
        placeholder="Write notes..."
        className="w-full h-40 p-3 rounded bg-white text-black"
      />

      <button
        onClick={() => setNotes("")}
        className="mt-3 bg-red-500 px-4 py-2 rounded"
      >
        Clear
      </button>
    </div>
  );
};

export default NotesWidget;