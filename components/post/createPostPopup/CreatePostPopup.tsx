import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FC, useEffect, useState } from "react";
import axios from "axios";

import { CreatePostPopupProps } from "../../../interfaces/utilsInterfaces";
import BackDrop from "../../dorpBack/BackDrop";
import { TextArea, Button } from "../../utilities/Utilities";

import styles from "./CreatePostPopup.module.scss";

const CreatePostPopup: FC<CreatePostPopupProps> = ({ open, setOpen }) => {
  const [createPost, setCreatePost] = useState("");
  const mutation = useMutation(() => {
    return axios
      .post("http://localhost:3000/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("Lposts2__token") || ""
          )}`,
        },
        method: "POST",
        body: { postContent: createPost },
      })
      .then((res) => res);
  });

  return (
    <BackDrop onClick={() => setOpen(false)}>
      <div className={styles.container}>
        <div className={styles.textArea__container}>
          <TextArea
            min={1}
            max={222}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setCreatePost(e.target.value.replace(/^[^\S]|[\n]/g, ""));
              // Replace first empty space or any new line with ""    :)
            }}
            value={createPost}
            placeholder="Create new post..."
          />
        </div>
        <div className={styles.buttons__container}>
          <Button
            text="create"
            onClick={() => {
              mutation.mutate();
            }}
          />
        </div>
      </div>
    </BackDrop>
  );
};

export default CreatePostPopup;
