import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Trash2, EditIcon, MoreVertical } from "lucide-react";

import { Navbar } from "@/components/atoms/Navebar/Navebar";
import PostLoader from "@/components/molecules/loders/PostLoader";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreatePostForm from "./createPostForm";
import { useSinglePost } from "@/hooks/apis/post/useSinglePost";
import { useDeletePost } from "@/hooks/apis/post/useDeletePost";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useSinglePost(id);
  const [isEditing, setIsEditing] = useState(false);

const { handleDeletePost, isDeleting } = useDeletePost();

const onDelete = async () => {
  try {
    await handleDeletePost(id);
    navigate("/home");
  } catch (error) {
    console.error("Delete failed:", error);
  }
};


  if (loading)
    return (
      <p className="text-center">
        <PostLoader />
      </p>
    );

  if (error || !post)
    return <p className="text-center text-red-500">Post not found.</p>;

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      {isEditing && (
        <div className="max-w-2xl mx-auto p-4 bg-white border rounded-md my-6 shadow">
          <CreatePostForm post={post} onClose={() => setIsEditing(false)} />
        </div>
      )}

      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-zinc-400">
            {post.updatedAt}
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <MoreVertical className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setIsEditing(true)}>
                <EditIcon className="h-4 w-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onDelete} disabled={isDeleting}>
                <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                {isDeleting ? "Deleting..." : "Delete"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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
