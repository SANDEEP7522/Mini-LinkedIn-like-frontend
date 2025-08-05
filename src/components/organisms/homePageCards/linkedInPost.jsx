import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAllPosts } from "@/hooks/apis/post/allPosts";

const LinkedInPost = () => {
  const { posts, loading, error } = useAllPosts();

  if (loading) return <p className="text-center">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load posts.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      {posts.length === 0 ? (
        <p className="text-center">No posts available.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post._id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="mb-3">
                  <AvatarImage
                    src={
                      post.author?.imageUrl ?? "https://github.com/shadcn.png"
                    }
                  />
                  <AvatarFallback>
                    {post.author?.initials ?? "CN"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">
                      {post.author?.name ?? "Unknown"}
                    </span>
                    &nbsp;
                  </p>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.content}</p>
                  <span className="text-xs text-gray-500">{post.createdAt}</span>
                </div>
              </div>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinkedInPost;

