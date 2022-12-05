import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import styles from "./CommentComponents.module.scss";
import { Comment, User } from "../../../interfaces/utils.Interface";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addError } from "../../../features/error/errorSlice";
import { Button } from "../../utilities/Utilities";
import { ClipLoader } from "react-spinners";

export const CommentActions: FC<{
  commentId: string;
  whoLike: string[];
  createdAt: string;
}> = ({ commentId, whoLike, createdAt }) => {
  const [currentWhoLike, setCurrentWhoLike] = useState(whoLike);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useQuery<User>(["user"]);

  const date = new Date(createdAt);

  const dispatch = useAppDispatch();

  const handleLike = useMutation(async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  });

  return (
    <div className={styles.actions}>
      <div
        className={styles.like}
        onClick={() => {
          if (!isLoading) {
            if (data) handleLike.mutateAsync();
            else dispatch(addError(["Login First..."]));
          }
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
        {isLoading ? (
          <ClipLoader color="#fff" loading={isLoading} size={10} />
        ) : (
          <p>{currentWhoLike.length}</p>
        )}
      </div>
      <p className={styles.date}>{date.toLocaleString()}</p>
    </div>
  );
};

export const CommentContent: FC<{
  commentContent: string;
  setCommentContent: Dispatch<SetStateAction<string>>;
  commentId: string;
  openEdit: boolean;
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
}> = ({
  commentContent,
  setCommentContent,
  openEdit,
  setOpenEdit,
  commentId,
}) => {
  const dispatch = useAppDispatch();
  const [newCommentContent, setNewCommentContent] = useState(commentContent);

  const editRef = useRef<any>(null);

  useEffect(() => {
    if (openEdit) {
      editRef.current?.focus();
    }
  }, [openEdit]);

  const handelEditPost = useMutation(async () => {
    try {
      const res = await axios.put<Comment>(
        `https://lposts2.onrender.com/comments/${commentId}`,
        { commentContent: newCommentContent },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      setOpenEdit(false);
      setCommentContent(res.data.commentContent);
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      dispatch(addError([err.response.data.message]));
    }
  });

  return (
    <>
      {openEdit ? (
        <div className={styles.edit}>
          <textarea
            ref={editRef}
            className={styles.edit__content}
            value={newCommentContent}
            onChange={(e) => {
              setNewCommentContent(e.target.value);
            }}
          />
          <div className={styles.edit__buttons}>
            <Button
              text="Edit"
              onClick={() => {
                handelEditPost.mutateAsync();
              }}
            />
            <Button
              text="Close"
              onClick={() => {
                setNewCommentContent(commentContent);
                setOpenEdit(false);
              }}
            />
          </div>
        </div>
      ) : (
        <p>{commentContent}</p>
      )}
    </>
  );
};
