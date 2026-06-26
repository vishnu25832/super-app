import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const Register = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter valid email";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Enter valid 10 digit mobile number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setUser(formData);
      navigate("/categories");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6 text-white">
          Registration
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full p-3 rounded bg-white text-black mb-2 outline-none"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mb-2">
            {errors.name}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
          className="w-full p-3 rounded bg-white text-black mb-2 outline-none"
        />

        {errors.username && (
          <p className="text-red-500 text-sm mb-2">
            {errors.username}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full p-3 rounded bg-white text-black mb-2 outline-none"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mb-2">
            {errors.email}
          </p>
        )}

        <input
          type="text"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({
              ...formData,
              mobile: e.target.value,
            })
          }
          className="w-full p-3 rounded bg-white text-black mb-4 outline-none"
        />

        {errors.mobile && (
          <p className="text-red-500 text-sm mb-4">
            {errors.mobile}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition p-3 rounded font-semibold"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Register;