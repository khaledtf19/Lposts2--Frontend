import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/posts", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("Lposts2__token") || ""
          )}`,
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, loading };
};

export const getPostById = (postId: string) => {
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

export const getPostsByUserId = (userId: string) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/posts/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("Lposts2__token") || ""
        )}`,
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
