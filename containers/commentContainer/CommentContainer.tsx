import { FC } from "react";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import { Comment } from "../../interfaces/utils.Interface";

import styles from "./CommentContainer.module.scss";

const CommentContainer: FC<{ comment: Comment }> = ({ comment }) => {
  const date = new Date(comment.createdAt);

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
        <div className={styles.actions}>
          <p>like</p>
          <p className={styles.date}>{date.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentContainer;
