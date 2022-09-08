import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import ViewManyPosts from "../../components/post/viewManyPosts/ViewManyPosts";
import UserProfile from "../../components/userProfile/UserProfile";
import { Post, User } from "../../interfaces/utils.Interface";

const User: NextPage<{ posts: Post[]; user: User }> = ({ posts, user }) => {
  return (
    <>
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
      `https://lposts-2.herokuapp.com/posts/user/${id}`
    );
    const data = res.data;
    return { props: { posts: data.posts, user: data.user } };
  } catch (err) {
    return { props: { posts: null, user: null } };
  }
};
