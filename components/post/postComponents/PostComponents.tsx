import { FC } from "react";
import { PostContentProps, UserInfoProps } from "./PostComponentsInterface";

import styles from "./PostComponents.module.scss";
import UserAvatar from "../../userAvatar/UserAvatar";
import { useRouter } from "next/router";

export const UserInfo: FC<UserInfoProps> = ({ name, avatar, userId }) => {
  const router = useRouter();

  return (
    <div
      className={styles.userInfo__component}
      onClick={() => {
        router.push(`/user/${userId}`);
      }}
    >
      <div className={styles.userInfo__avatar}>
        <UserAvatar avatar={avatar} width={35} height={35} />
      </div>
      <div className={styles.userInfo}>
        <p>{name}</p>
      </div>
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
      <div
        className={styles.comments}
        onClick={() => {
          router.push(`/post/${postId}`);
        }}
      >
        Comments
      </div>
    </div>
  );
};
