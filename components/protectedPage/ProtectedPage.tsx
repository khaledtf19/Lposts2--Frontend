import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { useGetUser } from "../../hooks/authHooks";
import LoadingPage from "../loadingPage/LoadingPage";

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useGetUser();
  const router = useRouter();

  if (isLoading) {
    return <LoadingPage isLoading />;
  }

  return <>{children}</>;
};

export default ProtectedPage;
