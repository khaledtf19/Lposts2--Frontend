import { FC, useReducer } from "react";
import CommentContainer from "../../../containers/commentContainer/CommentContainer";
import {
  Comment,
  CommentAction,
  CommentActionsTypes,
  CommentState,
} from "../../../interfaces/utils.Interface";
import CreateComment from "../createComment/CreateComment";

import styles from "./ViewManyComments.module.scss";

const ViewManyComments: FC<{
  comments: Comment[];
  postId: string;
}> = ({ comments, postId }) => {
  const reducer = (state: CommentState, action: CommentAction) => {
    switch (action.type) {
      case CommentActionsTypes.ADDNEWCOMMENT:
        return { ...state, comments: [...state.comments, action.newComment] };
      case CommentActionsTypes.REMOVECOMMENT:
        return {
          ...state,
          comments: state.comments.filter(
            (comment) => comment._id !== action.commentId
          ),
        };
      default:
        return state;
    }
  };

  const [currentComments, dispatch] = useReducer(reducer, {
    comments: comments,
  });

  return (
    <div className={styles.container}>
      {currentComments.comments.map((comment, index) => (
        <CommentContainer key={index} comment={comment} />
      ))}
      <CreateComment dispatch={dispatch} postId={postId} />
    </div>
  );
};

export default ViewManyComments;
