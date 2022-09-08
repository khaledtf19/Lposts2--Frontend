import { FC } from "react";
import CommentContainer from "../../../containers/commentContainer/CommentContainer";
import Container from "../../../containers/container/Container";

import styles from "./ViewManyComments.module.scss";

const ViewManyComments: FC<{ comments: any[] }> = ({ comments }) => {
  return (
    <Container>
      <div className={styles.container}>
        {comments.map((comment, index) => (
          <CommentContainer key={index} comment={comment} />
        ))}
      </div>
    </Container>
  );
};

export default ViewManyComments;
