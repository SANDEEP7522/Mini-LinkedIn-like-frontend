import { getFollows } from "@/apis/auth";
import { useQuery } from "@tanstack/react-query";

export const useGetFollowers = (userId) => {
  return useQuery({
    queryKey: ["followers", userId],
    queryFn: () => getFollows(userId),
    enabled: !!userId, // only run when userId is available
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};