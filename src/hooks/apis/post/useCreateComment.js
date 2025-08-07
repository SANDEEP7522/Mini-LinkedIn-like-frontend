import { postComment } from "@/apis/post";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


export const useCreateComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const submitComment = async (postId, content) => {
    setLoading(true);
    setError(null);
    try {
      const comment = await postComment(
        postId,
        content,
        localStorage.getItem("token")
      );
      toast({
        title: "Comment posted!",
        description: "Your comment has been added.",
      });
      return comment; // contains comment._id, user, text, createdAt, etc.
    } catch (err) {
      setError(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: err?.response?.data?.message || "Failed to post comment.",
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitComment, loading, error };
};
