import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <div className="text-8xl font-extrabold text-amber-400 mb-4">404</div>
      <div className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</div>
      <div className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the dashboard.
      </div>
      <button
        className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg shadow transition"
        onClick={() => navigate("/")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;