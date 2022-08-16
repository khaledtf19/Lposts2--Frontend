export interface CounterState {
  value: number;
}

export interface AuthState {
  data: { _id: string; email: string; name: string } | null;
  loading: boolean;
  error: string | undefined;
}

export interface User {
  _id: string;
  name: string;
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
  loading: boolean;
}
