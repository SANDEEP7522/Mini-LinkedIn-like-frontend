import { likePost } from "@/apis/post";
import { useAuth } from "@/hooks/context/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikePost = (postId) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { user } = useAuth();

  return useMutation({
    mutationFn: () => likePost(postId, localStorage.getItem("token")),
    onSuccess: () => {
      toast({
        title: "Liked!",
        description: "Post liked successfully.",
      });

      queryClient.invalidateQueries(["posts"]);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Something went wrong!",
        variant: "destructive",
      });
    },
  });
};
