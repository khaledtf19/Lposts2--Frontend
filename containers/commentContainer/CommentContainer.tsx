import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, FC, useState } from "react";
import {
  CommentActions,
  CommentContent,
} from "../../components/comment/commentComponents/CommentComponents";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import { DropDown } from "../../components/utilities/Utilities";
import { closeModal, openModal } from "../../features/modal/modalSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  Comment,
  CommentAction,
  CommentActionsTypes,
  User,
} from "../../interfaces/utils.Interface";

import styles from "./CommentContainer.module.scss";

const CommentContainer: FC<{
  comment: Comment;
  dispatch?: Dispatch<CommentAction>;
}> = ({ comment, dispatch }) => {
  const reduxDispatch = useAppDispatch();
  const { data } = useQuery<User>(["user"]);

  const [commentContent, setCommentContent] = useState(comment.commentContent);
  const [openEdit, setOpenEdit] = useState(false);

  const deletePost = useMutation(async () => {
    try {
      const res = await axios.delete(
        `https://lposts-2.herokuapp.com/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      if (dispatch)
        dispatch({
          type: CommentActionsTypes.REMOVECOMMENT,
          commentId: comment._id,
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className={styles.container}>
      <UserAvatar avatar={comment.owner.avatar} />
      <div className={styles.content__container}>
        <div className={styles.content}>
          <div className={styles.userName}>
            <p>{comment.owner.name}</p>
          </div>
          <CommentContent
            commentId={comment._id}
            commentContent={commentContent}
            setCommentContent={setCommentContent}
            setOpenEdit={setOpenEdit}
            openEdit={openEdit}
          />
        </div>
        <CommentActions
          commentId={comment._id}
          createdAt={comment.createdAt}
          whoLike={comment.whoLike}
        />
      </div>
      {data?._id === comment.owner._id && (
        <DropDown>
          <div
            onClick={() => {
              setOpenEdit(true);
            }}
          >
            Edit
          </div>
          <div
            onClick={() => {
              reduxDispatch(
                openModal({
                  message: "do you want to delete this Comment?",
                  btnMessage: "Delete",
                  btnFun: () => {
                    deletePost.mutateAsync();
                    reduxDispatch(closeModal());
                  },
                })
              );
            }}
          >
            Delete
          </div>
        </DropDown>
      )}
    </div>
  );
};

export default CommentContainer;
