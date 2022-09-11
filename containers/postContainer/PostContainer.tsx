import { FC } from "react";
import ViewManyComments from "../../components/comment/viewManyComments/ViewManyComments";
import {
  PostActions,
  PostContent,
  UserInfo,
} from "../../components/post/postComponents/PostComponents";

import { PostContainerProps } from "../../interfaces/utils.Interface";
import Container from "../container/Container";
import styles from "./PostContainer.module.scss";

const PostContainer: FC<PostContainerProps> = ({ post, comments }) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.userInfo__container}>
          <UserInfo
            name={post.owner.name}
            avatar={post.owner.avatar}
            userId={post.owner._id}
          />
        </div>
        <div className={styles.postContent__container}>
          <PostContent postContent={post.postContent} />
        </div>
        <div className={styles.actions__container}>
          <PostActions postId={post._id} whoLike={post.whoLike} />
        </div>
      </div>
      {comments && <ViewManyComments comments={post.comments} />}
    </Container>
  );
};

export default PostContainer;
