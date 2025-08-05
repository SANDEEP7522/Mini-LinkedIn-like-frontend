import { useCreatePost } from "@/hooks/apis/post/useCreatePost";
import { useState } from "react";

const CreatePostForm = () => {
  const { createPostMutation, isPending } = useCreatePost();
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("content", e.target.content.value);
    if (image) {
      formData.append("image", image); // backend should handle 'image' field
    }

    await createPostMutation(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" placeholder="Title" required className="border p-2 w-full" />
      <textarea name="content" placeholder="Write something..." required className="border p-2 w-full" />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="block"
      />

      <button type="submit" disabled={isPending} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isPending ? "Posting..." : "Post"}
      </button>
    </form>
  );
};

export default CreatePostForm;
