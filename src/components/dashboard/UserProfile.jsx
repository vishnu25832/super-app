import useStore from "../../store/useStore";

const UserProfile = () => {
  const user = useStore((state) => state.user);
  const categories = useStore(
    (state) => state.categories
  );

  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        Profile
      </h2>

      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.mobile}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {categories.map((item) => (
          <span
            key={item}
            className="bg-green-500 px-3 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;