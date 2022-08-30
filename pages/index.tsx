import type { GetServerSideProps, NextPage } from "next";

import { Post } from "../interfaces/utils.Interface";
import ViewManyPosts from "../components/post/viewManyPosts/ViewManyPosts";
import axios from "axios";

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return <ViewManyPosts posts={posts} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<Post[]>(`http://localhost:3000/posts`);

  const posts = res.data;

  return {
    props: { posts },
  };
};
