import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, FC, useState } from "react";
import { CommentAction } from "../../../interfaces/utils.Interface";

import { IoIosCreate } from "react-icons/io";

import styles from "./CreateComment.module.scss";

const CreateComment: FC<{
  dispatch: Dispatch<CommentAction>;
  postId: string;
}> = () => {
  const [newComment, setNewComment] = useState("");

  const createNewComment = useMutation(async () => {
    try {
      const res = await axios.post(
        "https://lposts-2.herokuapp.com/posts",
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
      <div>
        <IoIosCreate />
      </div>
    </div>
  );
};

export default CreateComment;
