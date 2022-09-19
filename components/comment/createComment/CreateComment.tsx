import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, FC, useState } from "react";
import {
  CommentAction,
  CommentActionsTypes,
} from "../../../interfaces/utils.Interface";

import { IoIosCreate } from "react-icons/io";
import { SyncLoader } from "react-spinners";

import styles from "./CreateComment.module.scss";

const CreateComment: FC<{
  dispatch: Dispatch<CommentAction>;
  postId: string;
}> = ({ dispatch, postId }) => {
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const createNewComment = useMutation(async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://lposts-2.herokuapp.com/comments/post/${postId}`,
        {
          commentContent: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      const data = res.data;
      dispatch({ type: CommentActionsTypes.ADDNEWCOMMENT, newComment: data });
      setNewComment("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  });

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textArea}
        minLength={1}
        maxLength={255}
        placeholder={"Create new Comment..."}
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value.replace(/^[^\S]|[\n]/g, ""));
        }}
      />
      <div
        className={styles.create__btn}
        onClick={() => {
          if (newComment.length >= 1) createNewComment.mutateAsync();
        }}
      >
        {loading ? (
          <SyncLoader color="#fff" loading={loading} size={5} />
        ) : (
          <IoIosCreate />
        )}
      </div>
    </div>
  );
};

export default CreateComment;
