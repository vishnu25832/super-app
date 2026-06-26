import { Navigate, Link } from "react-router-dom";

import useStore from "../store/useStore";

import UserProfile from "../components/dashboard/UserProfile";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import NewsWidget from "../components/dashboard/NewsWidget";
import NotesWidget from "../components/dashboard/NotesWidget";
import TimerWidget from "../components/dashboard/TimerWidget";

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  if (!user.name) {
    return <Navigate to="/" />;
  }

  if (categories.length < 3) {
    return <Navigate to="/categories" />;
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Super Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        <UserProfile />
        <WeatherWidget />
        <NewsWidget />
        <NotesWidget />
        <TimerWidget />
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/movies"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Open Movies
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;