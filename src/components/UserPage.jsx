import React from "react";
import { SkeletonCard } from "../ui/Skeleton";

// Accept all state as props from App
const UserPage = ({
  users,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  loading,
}) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Sort users by name
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "az") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });


  return (
    <div className="flex flex-wrap gap-4 p-4">
      {loading ? (
        Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
      ) : sortedUsers.length === 0 ? (
        <div className="w-full text-center text-gray-600 text-lg py-8">
          User not found
        </div>
      ) : (
        sortedUsers.map((user) => (
          <div
            className="border border-gray-300 rounded-lg shadow-md p-4 w-full sm:w-[48%] lg:w-[30%] bg-white hover:shadow-xl transition"
            key={user.id}
          >
            <ul className="space-y-1 text-gray-700">
              <li>
                <span className="font-semibold">Name:</span> {user.name}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {user.email}
              </li>
              <li>
                <span className="font-semibold">City:</span> {user.address.city}
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default UserPage;
