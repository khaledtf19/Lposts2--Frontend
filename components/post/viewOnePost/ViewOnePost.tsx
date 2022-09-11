import { FC } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { Post } from "../../../interfaces/utils.Interface";

import styles from "./ViewOnePost.module.scss";

const ViewOnePost: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.container}>
      <PostContainer post={post} comments={true} />
    </div>
  );
};

export default ViewOnePost;
