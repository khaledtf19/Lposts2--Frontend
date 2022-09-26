import React, { FC, useState } from "react";

import Container from "../../../containers/container/Container";
import { useGetUser } from "../../../hooks/authHooks";
import { PostPopupTypes } from "../../../interfaces/utils.Interface";
import UserAvatar from "../../userAvatar/UserAvatar";
import PostPopup from "../PostPopup/PostPopup";

import styles from "./CreatePost.module.scss";

const CreatePost: FC = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetUser();

  return (
    <>
      {data && (
        <Container>
          <div className={styles.container}>
            <UserAvatar avatar={data?.avatar} />
            <div className={styles.createPost} onClick={() => setOpen(true)}>
              <p>Create a post...</p>
            </div>
          </div>
        </Container>
      )}
      <>
        {open && (
          <PostPopup setOpen={setOpen} type={PostPopupTypes.CREATENEWPOST} />
        )}
      </>
    </>
  );
};

export default CreatePost;
