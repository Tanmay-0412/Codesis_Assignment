export const SkeletonCard = () => (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 w-full sm:w-[48%] lg:w-[30%] bg-white animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  );

export const SkeletonCardUserListing = () => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center text-center animate-pulse">
    <div className="w-24 h-24 rounded-full bg-gray-200 mb-3" />
    <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mt-2" />
  </div>
);