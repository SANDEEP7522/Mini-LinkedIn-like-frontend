import { useCreatePost } from "@/hooks/apis/post/useCreatePost";
import { LoaderPinwheel } from "lucide-react";
import { useState } from "react";

const CreatePostForm = () => {
  const { createPostMutation, isPending } = useCreatePost();
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("title", e.target.title.value);
    formData.append("content", e.target.content.value);
    if (image) {
      formData.append("image", image); // backend should handle 'image' field
    }

    await createPostMutation(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="content"
        placeholder="Write something..."
        required
        className="border p-2 w-full"
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
        className='myButton'
      >
        {isPending ? <LoaderPinwheel className="animate-spin text-black" /> : "Post"}
      </button>
    </form>
  );
};

export default CreatePostForm;
