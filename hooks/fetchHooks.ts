import { FC, useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetPostById = (postId: string) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/posts${postId}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("Lposts2__token") || ""
        )}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setPost(data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return { post, loading };
};

export const useGetPostsByUserId = (userId: string) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/posts/user/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, loading };
};
