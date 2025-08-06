import { Navbar } from "@/components/atoms/Navebar/Navebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSinglePost } from "@/hooks/apis/post/useSinglePost";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { post, loading, error } = useSinglePost(id);

  if (loading) return <p className="text-center">Loading post...</p>;
  if (error || !post)
    return <p className="text-center text-red-500">Post not found.</p>;

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <div className="flex items-start space-x-4">
          <Avatar className="mb-3">
            <AvatarImage
              src={post.author?.imageUrl ?? "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{post.author?.initials ?? "CN"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm text-gray-700 dark:text-zinc-200">
              <span className="font-bold">
                {post.author?.name ?? "Unknown"}
              </span>
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-zinc-300">
              {post.content}
            </p>
            <span className="text-xs text-gray-500 dark:text-zinc-400">
              {post.createdAt}
            </span>
          </div>
        </div>    
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full max-h-72 object-cover mt-4 rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
