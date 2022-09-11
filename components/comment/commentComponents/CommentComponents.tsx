import { FC, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import styles from "./CommentComponents.module.scss";
import { User } from "../../../interfaces/utils.Interface";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addError } from "../../../features/error/errorSlice";

export const CommentActions: FC<{
  commentId: string;
  whoLike: string[];
  createdAt: string;
}> = ({ commentId, whoLike, createdAt }) => {
  const [currentWhoLike, setCurrentWhoLike] = useState(whoLike);
  const { data } = useQuery<User>(["user"]);

  const date = new Date(createdAt);

  const dispatch = useAppDispatch();

  const handleLike = useMutation(async () => {
    try {
      const res = await axios.put<{ whoLike: string[] }>(
        `https://lposts-2.herokuapp.com/comments/like/${commentId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      const data = res.data;
      setCurrentWhoLike(data.whoLike);
    } catch (err) {}
  });

  return (
    <div className={styles.actions}>
      <div
        className={styles.like}
        onClick={() => {
          if (data) handleLike.mutateAsync();
          else dispatch(addError(["Login First..."]));
        }}
      >
        {data ? (
          currentWhoLike.includes(data?._id) ? (
            <AiFillLike />
          ) : (
            <AiOutlineLike />
          )
        ) : (
          <AiOutlineLike />
        )}
        {currentWhoLike.length}
      </div>
      <p className={styles.date}>{date.toLocaleString()}</p>
    </div>
  );
};
