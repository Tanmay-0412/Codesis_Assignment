import React from 'react'


const Pagination = ({ currentPage, totalPages, handlePageChange, handleNext, handlePrev }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        disabled={currentPage === 0}
        onClick={handlePrev}
        className={`px-4 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium transition 
      ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600 hover:text-white"}`}
      >
        Prev
      </button>

      {[...Array(totalPages).keys()].map((n) => (
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
        disabled={currentPage === totalPages - 1}
        onClick={handleNext}
        className={`px-4 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium transition 
      ${currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600 hover:text-white"}`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination