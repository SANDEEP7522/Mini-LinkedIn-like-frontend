const PostLoader = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-4 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-1">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="w-40 h-3 bg-gray-200 rounded mb-4"></div>
      <div className="w-full h-[300px] bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default PostLoader;
