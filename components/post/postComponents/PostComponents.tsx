import { FC } from "react";
import { PostContentProps, UserInfoProps } from "./PostComponentsInterface";

import styles from "./PostComponents.module.scss";
import UserAvatar from "../../userAvatar/UserAvatar";
import { useRouter } from "next/router";
import Link from "next/link";

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

export const PostActions: FC<{ postId: string }> = ({ postId }) => {
  const router = useRouter();
  return (
    <div className={styles.actions__component}>
      <div className={styles.like}>Like</div>
      <Link href={`/post/${postId}`}>
        <a className={styles.comments}>Comments</a>
      </Link>
    </div>
  );
};
