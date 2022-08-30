import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import ViewManyPosts from "../../components/post/viewManyPosts/ViewManyPosts";
import { Post } from "../../interfaces/utils.Interface";

const User: NextPage<{ posts: Post[] }> = ({ posts }) => {
  console.log(posts);
  return <ViewManyPosts posts={posts} />;
};

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get<Post[]>(
    `https://khaledtf199.up.railway.app/posts/user/${id}`
  );

  const data = res.data;
  return { props: { posts: data } };
};
