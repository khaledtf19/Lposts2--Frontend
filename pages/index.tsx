import Head from "next/head";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";

import { Post } from "../interfaces/utils.Interface";
import CreatePost from "../components/post/createPost/CreatePost";
import ViewManyPosts from "../components/post/viewManyPosts/ViewManyPosts";

import styles from "../styles/Home.module.scss";

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="LPosts 2 Home" />
      </Head>
      <CreatePost />
      {posts ? <ViewManyPosts posts={posts} /> : <h1>Error</h1>}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get<Post[]>(`https://lposts2.onrender.com/posts`);

    const posts = res.data;

    return {
      props: { posts },
    };
  } catch (err) {
    return {
      props: { posts: null },
    };
  }
};
