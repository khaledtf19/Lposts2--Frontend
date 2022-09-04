import { FC } from "react";
import { User } from "../../interfaces/utils.Interface";
import UserAvatar from "../userAvatar/UserAvatar";
import styles from "./UserProfile.module.scss";

const UserProfile: FC<{ user: User }> = ({ user }) => {
  return (
    <div className={styles.container}>
      <UserAvatar avatar={user.avatar} width={100} height={100} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
