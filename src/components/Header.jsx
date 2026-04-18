import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  showSearch = true,
}) => {
  const navigate = useNavigate();
  const timerRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearch(value);
    }, 300);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-amber-500 to-yellow-400 shadow-md px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <h1
          className="text-xl sm:text-2xl font-bold text-black tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          User Dashboard
        </h1>

        {showSearch && (
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                className="border border-gray-700 rounded-xl pl-10 pr-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 transition w-full"
                onChange={handleChange}
                defaultValue={search}
                placeholder="Search User..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <select
              className="border border-gray-400 rounded-xl px-2 py-2 text-sm sm:text-base focus:outline-none focus:ring-1  transition bg-transparent cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="az" className="cursor-pointer">Sort: Name (A–Z)</option>
              <option value="za" className="cursor-pointer">Sort: Name (Z–A)</option>
            </select>
          </div>
        )}

          <button
            className="text-black font-medium hover:text-amber-700 transition cursor-pointer border border-black rounded-lg px-3 py-1 text-sm sm:text-base"
            onClick={() => navigate("/user-listing")}
          >
            Pagination
          </button>
      </div>
    </>
  );
};

export default Header;
