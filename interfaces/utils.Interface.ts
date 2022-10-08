import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CounterState {
  value: number;
}

export interface AuthState {
  data: { _id: string; email: string; name: string; avatar: string } | null;
  loading: boolean;
  error: string | undefined;
}

export interface User {
  _id: string;
  name: string;
  avatar: string;
  following: string[];
  followers: string[];
}

// POST
export interface Post {
  _id: string;
  postContent: string;
  owner: User;
  whoLike: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}
export enum PostActionsTypes {
  REMOVEPOST = "REMOVE",
  CHANGEPOSTS = "CHANGE",
}

export type PostAction =
  | {
      type: PostActionsTypes.REMOVEPOST;
      postId: string;
    }
  | {
      type: PostActionsTypes.CHANGEPOSTS;
      posts: Post[];
    };

export interface PostState {
  posts: Post[];
}

// Comment
export interface Comment {
  _id: string;
  postId: string;
  commentContent: string;
  owner: User;
  createdAt: string;
  updatedAt: string;
  whoLike: string[];
}

export enum CommentActionsTypes {
  ADDNEWCOMMENT = "ADD",
  REMOVECOMMENT = "REMOVE",
}

export type CommentAction =
  | {
      type: CommentActionsTypes.ADDNEWCOMMENT;
      newComment: Comment;
    }
  | { type: CommentActionsTypes.REMOVECOMMENT; commentId: string };

export interface CommentState {
  comments: Comment[];
}

export interface PostContainerProps {
  post: Post;
  comments?: boolean;
  dispatch?: Dispatch<PostAction>;
}

export interface ViewPostsProps {
  posts: Post[];
}

export interface UserAvatarProps {
  avatar?: string;
  width?: number;
  height?: number;
}

export interface BackDropProps {
  children: ReactNode;
  onClick: Function;
}

export interface ButtonProps {
  text: string;
  onClick: Function;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface TextAreaProps {
  value: string;
  onChange: Function;
  min: number;
  max: number;
  placeholder: string;
}
export interface CreateNewPost {
  postContent: string;
}

export enum PostPopupTypes {
  CREATENEWPOST = "create",
  EDITPOST = "edit",
}
