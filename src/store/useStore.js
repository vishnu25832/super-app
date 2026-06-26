import { create } from "zustand";

const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || {
    name: "",
    username: "",
    email: "",
    mobile: "",
  },

  categories:
    JSON.parse(localStorage.getItem("categories")) || [],

  notes: localStorage.getItem("notes") || "",

  setUser: (user) => {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    set({
      user,
    });
  },

  setCategories: (categories) => {
    localStorage.setItem(
      "categories",
      JSON.stringify(categories)
    );

    set({
      categories,
    });
  },

  setNotes: (notes) => {
    localStorage.setItem("notes", notes);

    set({
      notes,
    });
  },

  resetStore: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("categories");
    localStorage.removeItem("notes");

    set({
      user: {
        name: "",
        username: "",
        email: "",
        mobile: "",
      },
      categories: [],
      notes: "",
    });
  },
}));

export default useStore;