import { FC, useState } from "react";
import { PostContentProps, UserInfoProps } from "./PostComponentsInterface";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

import styles from "./PostComponents.module.scss";
import UserAvatar from "../../userAvatar/UserAvatar";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../../../interfaces/utils.Interface";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addError } from "../../../features/error/errorSlice";

export const UserInfo: FC<UserInfoProps> = ({ name, avatar, userId }) => {
  const router = useRouter();

  return (
    <div className={styles.userInfo__component}>
      <Link href={`/user/${userId}`}>
        <a className={styles.userInfo__link}>
          <div className={styles.userInfo__avatar}>
            <UserAvatar avatar={avatar} width={35} height={35} />
          </div>
          <div className={styles.userInfo}>
            <p>{name}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export const PostContent: FC<PostContentProps> = ({ postContent }) => {
  return (
    <p
      className={
        postContent.length <= 50
          ? styles.content__component
          : styles.content__component__long
      }
    >
      {postContent}
    </p>
  );
};

export const PostActions: FC<{
  postId: string;
  whoLike: string[];
}> = ({ postId, whoLike }) => {
  const [currentWhoLike, setCurrentWhoLike] = useState(whoLike);
  const { data } = useQuery<User>(["user"]);

  const dispatch = useAppDispatch();

  const handleLike = useMutation(async () => {
    try {
      const res = await axios.post<{ likes: number; whoLike: string[] }>(
        `https://lposts-2.herokuapp.com/posts/like/${postId}`,
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
    <div className={styles.actions__component}>
      <div
        className={styles.like}
        onClick={() => {
          if (data) handleLike.mutate();
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
      <Link href={`/post/${postId}`}>
        <a className={styles.comments}>Comments</a>
      </Link>
    </div>
  );
};
