import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../interfaces/utils.Interface";

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return <div>hi</div>;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get<Post>(
    `https://lposts-2.herokuapp.com/posts/${id}`
  );

  const data = res.data;

  return { props: { post: data } };
};