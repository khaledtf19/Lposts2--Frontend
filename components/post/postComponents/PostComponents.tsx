import { FC } from "react";
import { PostContentProps, UserInfoProps } from "./PostComponentsInterface";

import styles from "./PostComponents.module.scss";
import UserAvatar from "../../userAvatar/UserAvatar";

export const UserInfo: FC<UserInfoProps> = ({ name, avatar }) => {
  return (
    <div className={styles.userInfo__component}>
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

export const PostActions = () => {
  return (
    <div className={styles.actions__component}>
      <div>Like</div>
      <div>Comments</div>
    </div>
  );
};
