import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

import ViewOnePost from "../../components/post/viewOnePost/ViewOnePost";
import { Post } from "../../interfaces/utils.Interface";

const Post: NextPage<{ post: Post | null }> = ({ post }) => {
  return <>{post ? <ViewOnePost post={post} /> : <h1>Wrong Post Id</h1>}</>;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const res = await axios.get<Post>(
      `https://lposts2.onrender.com/posts/${id}`
    );

    const data = res.data;

    return { props: { post: data } };
  } catch (err) {
    return { props: { post: null } };
  }
};
