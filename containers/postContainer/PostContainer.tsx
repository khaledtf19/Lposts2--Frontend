import { FC } from "react";
import {
  PostActions,
  PostContent,
  UserInfo,
} from "../../components/post/postComponents/PostComponents";

import { PostContainerProps } from "../../interfaces/utilsInterfaces";
import Container from "../container/Container";
import styles from "./PostContainer.module.scss";

const PostContainer: FC<PostContainerProps> = ({ post }) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.userInfo__container}>
          <UserInfo name={post.owner.name} avatar={post.owner.avatar} />
        </div>
        <div className={styles.postContent__container}>
          <PostContent postContent={post.postContent} />
        </div>
        <div className={styles.actions__container}>
          <PostActions />
        </div>
      </div>
    </Container>
  );
};

export default PostContainer;
