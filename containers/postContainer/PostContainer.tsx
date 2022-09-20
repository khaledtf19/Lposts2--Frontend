import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import ViewManyComments from "../../components/comment/viewManyComments/ViewManyComments";
import {
  PostActions,
  PostContent,
  UserInfo,
} from "../../components/post/postComponents/PostComponents";
import { DropDown } from "../../components/utilities/Utilities";

import {
  PostActionsTypes,
  PostContainerProps,
} from "../../interfaces/utils.Interface";
import Container from "../container/Container";
import styles from "./PostContainer.module.scss";

const PostContainer: FC<PostContainerProps> = ({
  post,
  comments,
  dispatch,
}) => {
  const deletePost = useMutation(async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/Posts/${post._id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("Lposts2__token") || ""
            )}`,
          },
        }
      );
      const data = res.data;
      if (dispatch)
        dispatch({ type: PostActionsTypes.REMOVEPOST, postId: post._id });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.userInfo__container}>
          <UserInfo
            name={post.owner.name}
            avatar={post.owner.avatar}
            userId={post.owner._id}
          />
          <DropDown>
            <div>edit</div>
            <div
              onClick={() => {
                deletePost.mutateAsync();
              }}
            >
              delete
            </div>
          </DropDown>
        </div>
        <div className={styles.postContent__container}>
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
  );
};

export default PostContainer;
