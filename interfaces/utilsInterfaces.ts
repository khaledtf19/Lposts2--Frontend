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
  email: string;
}

export interface Post {
  _id: string;
  postContent: string;
  owner: User;
  likes: number;
  whoLike: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  commentContent: string;
  owner: string;
}

export interface PostContainerProps {
  post: Post;
  comments?: Comment[];
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

export interface CreatePostPopupProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ButtonProps {
  text: string;
  onClick: Function;
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
