import { useState } from "react";
import { deletePost } from "@/apis/post";
import { useToast } from "@/hooks/use-toast";

export const useDeletePost = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDeletePost = async (postId) => {
    setIsDeleting(true);
    try {
      const data = await deletePost(postId);

      toast({
        title: "Post deleted",
        description: "The post has been successfully deleted.",
        variant: "success",
      });

      return data;
    } catch (error) {
      toast({
        title: "Delete failed",
        description: "Something went wrong while deleting the post.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsDeleting(false);
    }
  };

  return { handleDeletePost, isDeleting };
};
