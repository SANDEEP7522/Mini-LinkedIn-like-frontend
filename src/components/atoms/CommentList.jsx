import { useState } from "react";
import { useGetComments } from "@/hooks/apis/post/useAllComments";

const CommentList = ({ postId }) => {
  const [showAll, setShowAll] = useState(false);
  const { data: comments, isLoading, isError } = useGetComments(postId);

  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>Failed to load comments.</p>;

  const visibleComments = showAll ? comments : comments?.slice(0, 2);

  return (
    <div className="mt-4 space-y-4">
      {comments?.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        visibleComments.map((comment) => (
          <div
            key={comment._id}
            className="border p-3 rounded shadow-sm bg-white dark:bg-gray-800"
          >
            <div className="font-semibold">{comment.user.name}</div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {comment.text}
            </p>
            <p className="text-xs text-gray-400">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}

      {comments?.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:underline text-sm"
        >
          {showAll ? "Show Less" : `View All ${comments.length} Comments`}
        </button>
      )}
    </div>
  );
};

export default CommentList;
