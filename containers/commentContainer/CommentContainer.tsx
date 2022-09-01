import { FC } from "react";
import { Comment } from "../../interfaces/utils.Interface";
import Container from "../container/Container";

import styles from "./CommentContainer.module.scss";

const CommentContainer: FC<{ comment: Comment }> = ({ comment }) => {
  return <div className={styles.container}>{comment._id}</div>;
};

export default CommentContainer;
