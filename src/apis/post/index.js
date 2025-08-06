import axios from "@/config/axiosConfig";

export const createPost = async (formData) => {
  const token = localStorage.getItem("token");
  console.log("Sending token:", token);

  console.log("createPost called with:", formData);

  try {
    const response = await axios.post("/posts/create", formData, {
      headers: {
        "x-auth-token": token, 
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("createPost response:", response.data);
    return response.data;
  } catch (error) {
    console.error("createPost error:", error.response?.data || error.message);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get("/posts/all");
    return response.data;
  } catch (error) {
    console.error("getAllPosts error:", error);
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

export const updatePost = async (postId, formData) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(`/posts/${postId}`, formData, {
      headers: {
        "x-auth-token": token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("updatePost error:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/posts/${postId}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("deletePost error:", error);
    throw error;
  }
};
