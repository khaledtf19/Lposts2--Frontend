import { FC } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { ViewPostsProps } from "../../../interfaces/utils.Interface";

import styles from "./ViewManyPosts.module.scss";

const ViewManyPosts: FC<ViewPostsProps> = ({ posts }) => {
  return (
    <div className={styles.posts__container}>
      {posts.map((post) => (
        <PostContainer key={post._id} post={post} />
      ))}
    </div>
  );
};

export default ViewManyPosts;
