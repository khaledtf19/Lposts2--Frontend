import { FC } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { Post } from "../../../interfaces/utils.Interface";
import ViewManyComments from "../../comment/viewManyComments/ViewManyComments";

import styles from "./ViewOnePost.module.scss";

const ViewOnePost: FC<{ post: Post }> = ({ post }) => {
  console.log(post.comments);
  return (
    <div className={styles.container}>
      <PostContainer post={post} />
      <ViewManyComments comments={post.comments} />
    </div>
  );
};

export default ViewOnePost;
