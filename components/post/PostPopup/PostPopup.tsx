import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import axios from "axios";

import { Post, PostPopupTypes } from "../../../interfaces/utils.Interface";
import BackDrop from "../../dorpBack/BackDrop";
import { TextArea, Button } from "../../utilities/Utilities";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addError } from "../../../features/error/errorSlice";
import { useRouter } from "next/router";

import styles from "./PostPopup.module.scss";

const PostPopup: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
  postContent?: string;
  postId?: string;
  type: PostPopupTypes.CREATENEWPOST | PostPopupTypes.EDITPOST;
}> = ({ setOpen, postContent, postId, type }) => {
  const [createPost, setCreatePost] = useState(postContent || "");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handelCreatePost = useMutation(async () => {
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
      router.push(`/post/${res.data._id}`);
      setOpen(false);
      return res.data;
    } catch (err: any) {
      dispatch(addError(err.response.data.message));
    }
  });

  const handelEditPost = useMutation(async () => {
    try {
      const res = await axios.put<Post>(
        `https://lposts-2.herokuapp.com/posts/${postId}`,
        { postContent: createPost },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      router.push(`/post/${postId}`);
      setOpen(false);
      return res.data;
    } catch (err: any) {
      dispatch(addError([err.response.data.message]));
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
          <p>{createPost.length} out of 222</p>
        </div>
        <div className={styles.buttons__container}>
          <Button
            text={PostPopupTypes.CREATENEWPOST === type ? "Create" : "Edit"}
            onClick={() => {
              if (createPost.length >= 1) {
                if (PostPopupTypes.CREATENEWPOST === type) {
                  handelCreatePost.mutateAsync();
                } else {
                  handelEditPost.mutateAsync();
                }
              } else dispatch(addError(["You can't create empty post."]));
            }}
          />
          <Button
            text="Close"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      </div>
    </BackDrop>
  );
};

export default PostPopup;
