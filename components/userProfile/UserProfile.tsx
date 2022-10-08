import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC, useState } from "react";
import { SyncLoader } from "react-spinners";
import { User } from "../../interfaces/utils.Interface";
import UserAvatar from "../userAvatar/UserAvatar";
import styles from "./UserProfile.module.scss";

const UserProfile: FC<{ user: User }> = ({ user }) => {
  const { data } = useQuery<User>(["user"]);
  const [currentFollowers, setCurrentFollowers] = useState(user.followers);
  const [isLoading, setIsLoading] = useState(false);

  const follow = useMutation(async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `https://lposts-2.herokuapp.com/users/follow/${user._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      setCurrentFollowers(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  });

  return (
    <div className={styles.container}>
      <UserAvatar avatar={user.avatar} width={100} height={100} />
      <h2>{user.name}</h2>
      <div className={styles.follow}>
        <p>Following: {user.following.length}</p>
        <p>Followers: {currentFollowers.length}</p>
      </div>
      {data?._id !== user._id && data ? (
        <button
          className={`${styles.btn} ${
            currentFollowers.includes(data?._id) && styles.btn__following
          }`}
          onClick={() => {
            if (!isLoading) follow.mutateAsync();
          }}
        >
          {isLoading ? (
            <SyncLoader color="#fff" loading={isLoading} size={5} />
          ) : (
            <span>
              {!currentFollowers.includes(data?._id) ? "Follow" : "Following"}
            </span>
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProfile;
