import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { Container } from "lucide-react";

const CreatePostCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 w-full max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            src={user?.imageUrl ?? "https://github.com/shadcn.png"}
            alt="User Avatar"
          />
          <AvatarFallback>{user?.initials ?? "CN"}</AvatarFallback>
        </Avatar>

        <input
          type="text"
          placeholder="Start a post"
          readOnly
          className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-white cursor-pointer outline-none"
        />
      </div>

      <div className="flex justify-between mt-4 px-2">
        <button className="flex items-center space-x-2 text-green-600 font-medium text-sm hover:underline">
          <FaVideo />
          <span>Video</span>
        </button>
        <button
          onClick={() => navigate("/followersList")}
          className="flex items-center space-x-2 text-green-600 font-medium text-sm hover:underline"
        >
          <Container />
          <span>Connection</span>
        </button>

        <button className="flex items-center space-x-2 text-blue-500 font-medium text-sm hover:underline">
          <MdPhotoCamera />
          <span>Photo</span>
        </button>

        <button className="flex items-center space-x-2 text-orange-500 font-medium text-sm hover:underline">
          <MdArticle />
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
