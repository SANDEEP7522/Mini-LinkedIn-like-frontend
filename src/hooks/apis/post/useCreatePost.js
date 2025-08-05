import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { createPost } from "@/apis/post";
import { useAuth } from "@/hooks/context/useAuth";


export const useCreatePost = () => {
  const { toast } = useToast();
  const { auth } = useAuth(); // Optional, if token is needed

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: createPostMutation,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast({
        title: "Post created",
        message: "Your post has been successfully published.",
        type: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Post creation failed",
        message: error.message || "Something went wrong.",
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    createPostMutation,
  };
};
