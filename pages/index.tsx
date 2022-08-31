import type { GetServerSideProps, NextPage } from "next";

import { Post } from "../interfaces/utils.Interface";
import ViewManyPosts from "../components/post/viewManyPosts/ViewManyPosts";
import axios from "axios";
import CreatePost from "../components/post/createPost/CreatePost";

import styles from "../styles/Home.module.scss";

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <CreatePost />

      <ViewManyPosts posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<Post[]>(`https://lposts-2.herokuapp.com/posts`);

  const posts = res.data;

  return {
    props: { posts },
  };
};
