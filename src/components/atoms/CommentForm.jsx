import { useCreateComment } from "@/hooks/apis/post/useCreateComment";
import { Loader, SendHorizonal } from "lucide-react";
import { useState } from "react";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const { submitComment, loading } = useCreateComment();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitComment(postId, content);
      console.log("New Comment:", res); // You get full comment object here
      setContent("");
    } catch (err) {
      // Error already handled in hook
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 flex justify-content-center items-center "
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded bg-gray-100"
        placeholder="Write a comment..."
        required
      />
      <button
        type="submit"
        className="flex items-center text-blue-500 hover:text-blue-600 disabled:text-gray-400"
        disabled={loading}
      >
        {loading ? (
          <Loader className="animate-spin mr-2" />
        ) : (
          <SendHorizonal className="mr-2" />
        )}
        <p className="font-semibold text-gray-600">send</p>
      </button>
    </form>
  );
};

export default CommentForm;
