import { updatePost } from "@/apis/post";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePost = () => {
  const { toast } = useToast();

  const {
    mutateAsync: updatePostMutation,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: ({ postId, formData }) => updatePost(postId, formData),
    onSuccess: () => {
      toast({
        title: "Post updated",
        message: "Your post was successfully updated.",
        type: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Update failed",
        message: error.response?.data?.message || "Something went wrong.",
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    updatePostMutation,
    isPending,
    isSuccess,
    error,
  };
};
