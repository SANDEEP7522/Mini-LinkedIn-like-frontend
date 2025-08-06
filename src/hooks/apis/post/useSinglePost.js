import { getPostById } from "@/apis/post";
import { useEffect, useState } from "react";

export const useSinglePost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      try {
        const data = await getPostById(id);
        console.log("data in usePostById", data);
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  return { post, loading, error };
};
