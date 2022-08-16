import { FC } from "react";
import {
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
          <UserInfo name={post.owner.name} email={post.owner.email} />
        </div>
        <div className={styles.postContent__container}>
          <PostContent postContent={post.postContent} />
        </div>
        <div className={styles.actions__container}></div>
      </div>
    </Container>
  );
};

export default PostContainer;
