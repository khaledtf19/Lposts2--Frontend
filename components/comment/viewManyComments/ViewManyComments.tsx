import { FC } from "react";
import CommentContainer from "../../../containers/commentContainer/CommentContainer";
import Container from "../../../containers/container/Container";

const ViewManyComments: FC<{ comments: any[] }> = ({ comments }) => {
  return (
    <Container>
      {comments.map((comment, index) => (
        <CommentContainer key={index} comment={comment} />
      ))}
    </Container>
  );
};

export default ViewManyComments;
