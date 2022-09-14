import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, FC, useState } from "react";
import { CommentAction } from "../../../interfaces/utils.Interface";

import styles from "./CreateComment.module.scss";

const CreateComment: FC<{
  dispatch: Dispatch<CommentAction>;
  postId: string;
}> = () => {
  const [newComment, setNewComment] = useState("");

  const createNewComment = useMutation(async () => {
    try {
      const res = axios.post("https://lposts-2.herokuapp.com/posts");
    } catch (err) {}
  });

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textArea}
        minLength={1}
        maxLength={255}
        placeholder={"Create new Comment..."}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
    </div>
  );
};

export default CreateComment;
