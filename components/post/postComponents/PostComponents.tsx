import { FC } from "react";
import {
  PostContentProps,
  UserAvatarProps,
  UserInfoProps,
} from "./PostComponentsInterface";

import styles from "./PostComponents.module.scss";

export const UserInfo: FC<UserInfoProps> = ({ name, email }) => {
  return <div className={styles.userInfo__component}></div>;
};

export const PostContent: FC<PostContentProps> = ({ postContent }) => {
  return (
    <p
      className={
        postContent.length <= 30
          ? styles.content__component
          : styles.content__component__long
      }
    >
      {postContent}
    </p>
  );
};

export const AvatarPost: FC<UserAvatarProps> = ({ avatar }) => {
  return (
    <img
      className={styles.avatar__component}
      src={`https://avatars.dicebear.com/api/bottts/:${avatar}.svg`}
      alt={`${avatar}`}
    />
  );
};

export const PostActions = () => {
  return <div className={styles.actions__component}></div>;
};
