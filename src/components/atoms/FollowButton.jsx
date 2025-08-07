import useFollowUser from "@/hooks/apis/auth/useFollow";
import { Loader, Plus } from "lucide-react";

const FollowButton = ({ userId, initiallyFollowing }) => {
  const { isFollowing, loading, error, handleFollowToggle } =
    useFollowUser(initiallyFollowing);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
      <button
        onClick={() => handleFollowToggle(userId)}
        disabled={loading}
        className={`btn ${
          isFollowing ? "btn-error" : "btn-success"
        } btn-sm flex items-center gap-2 px-3 py-1.5`}
      >
        {loading ? (
          <Loader className="animate-spin h-4 w-4" />
        ) : (
          <>
            {isFollowing ? "Unfollow" : "Follow"}
            <Plus  className="h-4 w-4 text-blue-500 hover:text-blue-700" />
          </>
        )}
      </button>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FollowButton;
