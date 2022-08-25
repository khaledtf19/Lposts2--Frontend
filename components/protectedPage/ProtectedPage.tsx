import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { UseGetUserWithDispatch } from "../../hooks/authHooks";

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { data, loading, error } = UseGetUserWithDispatch();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    router.push("/login");
    return <div>Error</div>;
  }

  return <>{children}</>;
};

export default ProtectedPage;
