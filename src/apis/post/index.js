import axios from "@/config/axiosConfig";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("/posts/all");
    return response.data;
  } catch (error) {
    console.error("getAllPosts error:", error);
    throw error;
  }
};

export const createPost = async ({ title, content, imageUrl, authorId }) => {
  try {
    const response = await axios.post(
      "/posts/create",
      { title, content, imageUrl, authorId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ attach token
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("createPost error:", error.response?.data || error.message);
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("getPostById error:", error);
    throw error;
  }
};
export const updatePost = async (postId, updatedData) => {
  try {
    const response = await axios.put(`/posts/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("updatePost error:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("deletePost error:", error);
    throw error;
  }
};
