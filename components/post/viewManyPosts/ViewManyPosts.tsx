import { FC } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { ViewPostsProps } from "../../../interfaces/utilsInterfaces";
import CreatePost from "../createPost/CreatePost";

import styles from "./ViewManyPosts.module.scss";

const ViewManyPosts: FC<ViewPostsProps> = ({ posts, loading }) => {
  return (
    <div className={styles.posts__container}>
      <CreatePost />
      {posts.map((post) => (
        <PostContainer key={post._id} post={post} />
      ))}
    </div>
  );
};

export default ViewManyPosts;