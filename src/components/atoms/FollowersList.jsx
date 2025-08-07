import { useGetFollowers } from "@/hooks/apis/auth/useGetFollows";
import React from "react";
import { Navbar } from "./Navebar/Navebar";

const FollowersList = ({ userId }) => {
  const { data, isLoading, isError, error } = useGetFollowers(userId);

  if (isLoading) return <p>Loading followers...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const followers = data?.followers || []; // ✅ Safe fallback
   return (
    <div className="min-h-screen bg-gray-200 dark:bg-zinc-900">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Followers
        </h2>

        <ul className="space-y-4">
          {followers.length === 0 ? (
            <li className="text-gray-600 dark:text-zinc-300 text-sm">
              No followers yet.
            </li>
          ) : (
            followers.map((follower) => (
              <li
                key={follower._id}
                className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm flex items-center space-x-4"
              >
                <img
                  src={follower.profilePic ?? "https://github.com/shadcn.png"}
                  alt={follower.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-800 dark:text-white font-medium">
                  {follower.username}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default FollowersList;
