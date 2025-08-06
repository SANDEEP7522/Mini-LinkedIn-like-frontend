
import axios from "@/config/axiosConfig";
import { useUpdatePost } from "@/hooks/apis/post/useUpdatePost";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { updatePostMutation, isPending } = useUpdatePost();

  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // Fetch post data for pre-fill
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/posts/${postId}`);
        setContent(data.content);
        // You can preload image if needed
      } catch (err) {
        console.error("Error loading post", err);
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      await updatePostMutation({ postId, formData });
      navigate("/home");
    } catch (err) {
      console.error("Failed to update", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold">Edit Post</h2>

      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="border p-2 w-full"
        placeholder="Update content..."
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="block"
      />

      <button
        type="submit"
        disabled={isPending}
        className="myButton"
      >
        {isPending ? <Loader className="animate-spin text-black" /> : "Update Post"}
      </button>
    </form>
  );
};

export default EditPostPage;
