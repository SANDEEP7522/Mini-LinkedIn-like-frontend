import axios from "@/config/axiosConfig";

export const createPost = async (formData) => {
  const token = localStorage.getItem("token");
  console.log("Sending token:", token);

  console.log("createPost called with:", formData);

  try {
    const response = await axios.post("/posts/create", formData, {
      headers: {
        "x-auth-token": token,
      },
      withCredentials: true,
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

export const likePost = async (postId, token) => {
  try {
    const res = await axios.patch(
      `/like/${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error while liking post:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// src/apis/post.js

export const postComment = async (postId, text, token) => {
  try {
    const res = await axios.post(
      `/comment/${postId}`,
      { postId, text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error while posting comment:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const getAllComments = async (postId) => {
  try {
    const response = await axios.get(`comments/${postId}`);
    return response.data.comments;
  } catch (error) {
    console.error("getAllComments error:", error);
    throw error;
  }
};
