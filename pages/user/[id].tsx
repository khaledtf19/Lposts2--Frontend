import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ViewManyPosts from "../../components/post/viewManyPosts/ViewManyPosts";
import UserProfile from "../../components/userProfile/UserProfile";
import { Post, User } from "../../interfaces/utils.Interface";

const User: NextPage<{ posts: Post[]; user: User }> = ({ posts, user }) => {
  return (
    <>
      <Head>
        <title>User</title>
        <meta name="description" content="LPosts 2 User" />
        <meta name="keywords" content="user, posts, "></meta>
      </Head>
      {posts ? (
        <>
          <UserProfile user={user} />
          <ViewManyPosts posts={posts} />
        </>
      ) : (
        <h1>Wrong User ID</h1>
      )}
    </>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const res = await axios.get<{ posts: Post[]; user: User }>(
      `https://lposts2.onrender.com/posts/user/${id}`
    );
    const data = res.data;

    return { props: { posts: data.posts, user: data.user } };
  } catch (err) {
    return { props: { posts: null, user: null } };
  }
};
