import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreatePostForm from "../posts/createPostForm";
import { useAllPosts } from "@/hooks/apis/post/allPosts";
import { Link } from "react-router-dom";

const LinkedInPost = () => {
  const { posts, loading, error } = useAllPosts();

  return (
    <div className="min-h-screen w-full flex flex-col bg-slack dark:bg-zinc-900">
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 py-6">
        {/* Left Sidebar - Profile */}
        <div className=" hidden md:block md:col-span-3">
          <div className="p-4 bg-white dark:bg-zinc-800 shadow rounded-xl w-full">
            <Avatar className="mb-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="font-semibold">Sandeep Kumar Sahu</h2>
            <p className="text-sm text-zinc-500">
              Full-Stack Developer (Frontend & Backend)
            </p>
            <p className="text-xs mt-1 text-zinc-400">
              Prayagraj, Uttar Pradesh
            </p>
            <div className="px-4 mt-4">
              <CreatePostForm />
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-1 md:col-span-6">
          {loading ? (
            <p className="text-center">Loading posts...</p>
          ) : error ? (
            <p className="text-center text-red-500">Failed to load posts.</p>
          ) : posts.length === 0 ? (
            <p className="text-center">No posts available.</p>
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li
                  key={post._id}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-800"
                >
                  <div className="flex items-start space-x-4">
                    <Avatar className="mb-3">
                      <AvatarImage
                        src={
                          post.author?.imageUrl ??
                          "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>
                        {post.author?.initials ?? "CN"}
                      </AvatarFallback>
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
                  <Link to={`/posts/${post._id}`}>
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt="Post"
                        className="w-full max-h-72 object-cover mt-4 rounded-md"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Sidebar - Job Ads */}
        <div className="hidden md:block md:col-span-3">
          <div className="p-4 bg-white dark:bg-zinc-800 shadow rounded-xl w-full">
            <h3 className="text-lg font-semibold mb-2">
              See who's hiring on LinkedIn
            </h3>
            <img
              src="https://marketplace.canva.com/EAF6WBufBtU/1/0/1131w/canva-blue-white-minimalist-hiring-poster-fH9LmxEQi7M.jpg"
              alt="Job Ad"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Mobile FAB for Create Post */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Dialog>
          <DialogTrigger className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none">
            <Plus className="w-6 h-6" />
          </DialogTrigger>
          <DialogContent className="max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-2">Create Post</h2>
            <CreatePostForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LinkedInPost;
