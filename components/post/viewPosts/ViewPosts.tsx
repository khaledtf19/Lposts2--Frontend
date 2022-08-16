import { FC } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { ViewPostsProps } from "../../../interfaces/utilsInterfaces";

import styles from "./ViewPosts.module.scss";

const ViewPosts: FC<ViewPostsProps> = ({ posts, loading }) => {
  return (
    <div className={styles.posts__container}>
      {posts.map((post) => (
        <PostContainer key={post._id} post={post} />
      ))}
    </div>
  );
};

export default ViewPosts;
