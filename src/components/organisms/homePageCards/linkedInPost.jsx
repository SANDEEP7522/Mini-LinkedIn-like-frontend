import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreatePostForm from "../posts/createPostForm";
import { useAllPosts } from "@/hooks/apis/post/allPosts";
import { Link } from "react-router-dom";
import LikeButton from "@/components/atoms/LikeButton";
import CommentForm from "@/components/atoms/CommentForm";
import { useState } from "react";
import CommentList from "@/components/atoms/CommentList";
import FollowButton from "@/components/atoms/FollowButton";
import FollowersList from "@/components/atoms/FollowersList";
import CreatePostCard from "@/components/atoms/Navebar/CreatePostCard";

const LinkedInPost = ({ user }) => {
  const { posts, loading, error } = useAllPosts();

  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleOpenComment = () => {
    setShowCommentForm((prev) => !prev);
  };

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
          <CreatePostCard />
          <div className="mt-4">
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
                    {/* {console.log("post", post)} */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:space-x-4 p-4 border rounded-md">
                      {/* Left Section: Avatar + Post Info */}
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
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
                        </div>

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

                      {/* Right Section: Follow Button (only if not own post) */}
                      {user?._id !== post.author?._id && (
                        <div className="mt-4 sm:mt-0 sm:self-start">
                          <FollowButton
                            userId={post.author?._id}
                            initiallyFollowing={post.author?.followers?.includes(
                              user?._id
                            )}
                          />
                        </div>
                      )}
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

                    <div className="mt-4 flex flex-col gap-2 bg-gray-100 w-full p-4 border rounded-md  ">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-zinc-400">
                          {post.likes?.length || 0} likes
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-gray-500 dark:text-zinc-400 border-t pt-0 ">
                        <LikeButton
                          postId={post._id}
                          isLiked={post.likes?.includes(user?._id)}
                        />
                        <div className="border p-0 rounded mb-0">
                          <button
                            onClick={handleOpenComment}
                            className="hover:text-blue-600 transition mt-0"
                          >
                            💬 Comment
                          </button>
                        </div>
                        {/* <BookmarkButton
                        postId={post._id}
                        isBookmarked={post.bookmarks?.includes(user?._id)}
                      />{" "}
                       */}
                      </div>
                      <div>
                        {showCommentForm && (
                          <CommentForm
                            postId={post._id}
                            onCommentAdded={(comment) => {
                              // Optional: do something when comment added
                              setShowCommentForm(false); // auto-close if you want
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <h6 className="font-semibold">Comments:</h6>
                        <CommentList postId={post._id} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <LikeButton
              postId={posts._id}
              isLiked={posts.likes?.includes(user._id)}
            />
            <span className="text-sm text-gray-500 dark:text-zinc-400">
              {posts.likes?.length || 0} likes
            </span>
          </div>
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
