import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FC, useEffect, useState } from "react";
import axios from "axios";

import {
  CreatePostPopupProps,
  Post,
} from "../../../interfaces/utils.Interface";
import BackDrop from "../../dorpBack/BackDrop";
import { TextArea, Button } from "../../utilities/Utilities";

import styles from "./CreatePostPopup.module.scss";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addError, openError } from "../../../features/error/errorSlice";
import { useRouter } from "next/router";

const CreatePostPopup: FC<CreatePostPopupProps> = ({ open, setOpen }) => {
  const [createPost, setCreatePost] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const mutation = useMutation(async () => {
    try {
      const res = await axios.post<Post>(
        "https://lposts-2.herokuapp.com/posts",
        { postContent: createPost },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      console.log(res.data);
      router.push(`post/${res.data._id}`);
      return res.data;
    } catch (err: any) {
      console.log(err.response.data.message);
      dispatch(addError(err.response.data.message));
    }
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
              if (createPost.length > 1) mutation.mutate();
            }}
          />
        </div>
      </div>
    </BackDrop>
  );
};

export default CreatePostPopup;
