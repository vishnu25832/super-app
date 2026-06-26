import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route path="/categories" element={<Categories />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;