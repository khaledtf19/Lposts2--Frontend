import React, { FC } from "react";
import Container from "../../../containers/container/Container";
import { useGetUser } from "../../../hooks/authHooks";
import UserAvatar from "../../userAvatar/UserAvatar";

const CreatePost: FC = () => {
  const { data, loading, error } = useGetUser();
  return (
    <Container>
      <UserAvatar avatar={data?.avatar} />
    </Container>
  );
};

export default CreatePost;
