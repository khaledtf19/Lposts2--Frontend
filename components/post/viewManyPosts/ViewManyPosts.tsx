import { FC, useEffect, useReducer } from "react";

import PostContainer from "../../../containers/postContainer/PostContainer";
import {
  PostAction,
  PostActionsTypes,
  PostState,
  ViewPostsProps,
} from "../../../interfaces/utils.Interface";

import styles from "./ViewManyPosts.module.scss";

const ViewManyPosts: FC<ViewPostsProps> = ({ posts }) => {
  const reducer = (state: PostState, action: PostAction) => {
    switch (action.type) {
      case PostActionsTypes.REMOVEPOST:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== action.postId),
        };
      case PostActionsTypes.CHANGEPOSTS:
        return { posts: action.posts };
      default:
        return state;
    }
  };

  const [currentPosts, dispatch] = useReducer(reducer, { posts: posts });

  useEffect(() => {
    dispatch({ type: PostActionsTypes.CHANGEPOSTS, posts: posts });
  }, [posts]);

  return (
    <div className={styles.posts__container}>
      {currentPosts.posts.map((post) => (
        <PostContainer key={post._id} post={post} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ViewManyPosts;
