import { getAllComments } from "@/apis/post";
import { useQuery } from "@tanstack/react-query";


export const useGetComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getAllComments(postId),
    enabled: !!postId, // ensure postId is not undefined/null
  });
};