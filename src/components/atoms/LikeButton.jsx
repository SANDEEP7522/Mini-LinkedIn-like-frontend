import { useLikePost } from "@/hooks/apis/post/useLikePost";

const LikeButton = ({ postId, isLiked }) => {
  const { mutate, isLoading } = useLikePost(postId);

  return (
    <div className="flex items-center gap-2 mt[-2]">
      <button
        onClick={() => mutate()}
        disabled={isLoading}
        className={`text-sm  px-2 py-1 rounded ${
          isLiked ? "bg-red-500 text-white" : "bg-zinc-100"
        }`}
      >
        {isLiked ? "❤️ Unlike" : "🤍 Like"}
      </button>
    </div>
  );
};

export default LikeButton;
