import React, { FC, useState } from "react";

import Container from "../../../containers/container/Container";
import { useGetUser } from "../../../hooks/authHooks";
import UserAvatar from "../../userAvatar/UserAvatar";
import CreatePostPopup from "../createPostPopup/CreatePostPopup";

import styles from "./CreatePost.module.scss";

const CreatePost: FC = () => {
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useGetUser();

  return (
    <>
      <Container>
        <div className={styles.container}>
          <UserAvatar avatar={data?.avatar} />
          <div className={styles.createPost} onClick={() => setOpen(true)}>
            <p>Create a post...</p>
          </div>
        </div>
      </Container>
      <>{open && <CreatePostPopup open={open} setOpen={setOpen} />}</>
    </>
  );
};

export default CreatePost;
