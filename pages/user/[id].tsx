import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import ViewManyPosts from "../../components/post/viewManyPosts/ViewManyPosts";
import { Post } from "../../interfaces/utils.Interface";

const User: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>{posts ? <ViewManyPosts posts={posts} /> : <h1>Wrong User ID</h1>}</>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const res = await axios.get<Post[]>(
      `https://lposts-2.herokuapp.com/posts/user/${id}`
    );

    const data = res.data;
    return { props: { posts: data } };
  } catch (err) {
    return { props: { posts: null } };
  }
};
