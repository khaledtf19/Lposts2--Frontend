import { FC } from "react";
import CommentContainer from "../../../containers/commentContainer/CommentContainer";

import PostContainer from "../../../containers/postContainer/PostContainer";
import { Post } from "../../../interfaces/utils.Interface";
import ViewManyComments from "../../comment/viewManyComments/ViewManyComments";

const ViewOnePost: FC<{ post: Post }> = ({ post }) => {
  console.log(post.comments);
  return (
    <>
      <PostContainer post={post} />
      <ViewManyComments comments={post.comments} />
    </>
  );
};

export default ViewOnePost;
