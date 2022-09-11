import { FC } from "react";
import { CommentActions } from "../../components/comment/commentComponents/CommentComponents";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import { Comment } from "../../interfaces/utils.Interface";

import styles from "./CommentContainer.module.scss";

const CommentContainer: FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className={styles.container}>
      <UserAvatar avatar={comment.owner.avatar} />
      <div className={styles.content__container}>
        <div className={styles.content}>
          <div className={styles.userName}>
            <p>{comment.owner.name}</p>
          </div>
          <p>{comment.commentContent}</p>
        </div>
        <CommentActions
          commentId={comment._id}
          createdAt={comment.createdAt}
          whoLike={comment.whoLike}
        />
      </div>
    </div>
  );
};

export default CommentContainer;
