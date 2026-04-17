import React, { useEffect, useState } from "react";
import { user_list_URL } from "../utlis/constant";
import { SkeletonCardUserListing } from "../ui/Skeleton";

const UserListingPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const ListUser = async (URL) => {
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data.users);
    setLoading(false);
  };

  useEffect(() => {
    ListUser(user_list_URL);
  }, []);

  const Page_size = 9;
  const totalUsers = users.length;
  const no_of_pages = Math.ceil(totalUsers / Page_size);
  const start = Page_size * currentPage;
  const end = start + Page_size;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {loading
          ? Array.from({ length: Page_size }).map((_, i) => <SkeletonCardUserListing key={i} />)
          : users.slice(start, end).map((user) => (
              <div
                key={user.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
              >
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-amber-500"
                />
                <p className="text-lg font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {user.company.address.address}
                </p>
              </div>
            ))}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button
          disabled={currentPage === 0}
          onClick={handlePrev}
          className={`px-4 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium transition 
      ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600 hover:text-white"}`}
        >
          Prev
        </button>

        {[...Array(no_of_pages).keys()].map((n) => (
          <span
            key={n}
            onClick={() => handlePageChange(n)}
            className={`px-3 py-1 rounded-lg cursor-pointer font-medium transition 
        ${
          currentPage === n
            ? "bg-amber-600 text-white border border-amber-600"
            : "bg-white border border-gray-300 text-gray-700 hover:bg-amber-100"
        }`}
          >
            {n + 1}
          </span>
        ))}

        <button
          disabled={currentPage === end}
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium transition 
      ${currentPage === no_of_pages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600 hover:text-white"}`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserListingPage;
