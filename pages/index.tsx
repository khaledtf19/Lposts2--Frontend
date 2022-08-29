import type { GetServerSideProps, NextPage } from "next";

import { Post } from "../interfaces/utilsInterfaces";
import ViewManyPosts from "../components/post/viewManyPosts/ViewManyPosts";

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return <ViewManyPosts posts={posts} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const posts = await res.json();

  return {
    props: { posts },
  };
};
