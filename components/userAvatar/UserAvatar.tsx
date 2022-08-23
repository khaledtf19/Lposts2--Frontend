import { FC } from "react";
import Image from "next/image";

import { UserAvatarProps } from "../../interfaces/utilsInterfaces";

import styles from "./UserAvatar.module.scss";

const UserAvatar: FC<UserAvatarProps> = ({ avatar }) => {
  return (
    <Image
      className={styles.avatar__component}
      src={`https://avatars.dicebear.com/api/bottts/:${avatar}.svg`}
      alt={`${avatar}`}
      width={50}
      height={50}
    />
  );
};

export default UserAvatar;
