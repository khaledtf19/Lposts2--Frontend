import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import ViewManyComments from "../../components/comment/viewManyComments/ViewManyComments";
import {
  PostActions,
  PostContent,
  UserInfo,
} from "../../components/post/postComponents/PostComponents";
import PostPopup from "../../components/post/PostPopup/PostPopup";
import { DropDown } from "../../components/utilities/Utilities";
import { closeModal, openModal } from "../../features/modal/modalSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

import {
  PostActionsTypes,
  PostContainerProps,
  PostPopupTypes,
  User,
} from "../../interfaces/utils.Interface";
import Container from "../container/Container";
import styles from "./PostContainer.module.scss";

const PostContainer: FC<PostContainerProps> = ({
  post,
  comments,
  dispatch,
}) => {
  const router = useRouter();
  const reduxDispatch = useAppDispatch();

  const [openEdit, setOpenEdit] = useState(false);
  const { data } = useQuery<User>(["user"]);

  const date = new Date(post.createdAt);

  const deletePost = useMutation(async () => {
    try {
      const res = await axios.delete(
        `https://lposts2.onrender.com/Posts/${post._id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      if (dispatch)
        dispatch({ type: PostActionsTypes.REMOVEPOST, postId: post._id });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <Container>
        <div className={styles.container}>
          <div className={styles.userInfo__container}>
            <UserInfo
              name={post.owner.name}
              avatar={post.owner.avatar}
              userId={post.owner._id}
            />
            {data?._id === post.owner._id ? (
              <DropDown>
                <div
                  onClick={() => {
                    setOpenEdit(true);
                  }}
                >
                  Edit
                </div>
                <div
                  onClick={() => {
                    reduxDispatch(
                      openModal({
                        message: "do you want to delete this post?",
                        btnMessage: "Delete",
                        btnFun: () => {
                          deletePost.mutateAsync();
                          if (router.pathname === "/post/[id]") {
                            router.push("/");
                          }
                          reduxDispatch(closeModal());
                        },
                      })
                    );
                  }}
                >
                  Delete
                </div>
              </DropDown>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.postContent__container}>
            <p className={styles.date}>{date.toLocaleString()}</p>
            <PostContent postContent={post.postContent} />
          </div>
          <div className={styles.actions__container}>
            <PostActions
              postId={post._id}
              whoLike={post.whoLike}
              comments={post.comments.length}
            />
          </div>
        </div>
        {comments && (
          <ViewManyComments comments={post.comments} postId={post._id} />
        )}
      </Container>
      {openEdit && (
        <PostPopup
          setOpen={setOpenEdit}
          postContent={post.postContent}
          postId={post._id}
          type={PostPopupTypes.EDITPOST}
        />
      )}
    </>
  );
};

export default PostContainer;
