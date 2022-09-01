import { FC, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

import { useGetUser } from "../../hooks/authHooks";

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading, error } = useGetUser();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return <>{children}</>;
  }

  router.push("/login");
  return <div>Error</div>;
};

export default ProtectedPage;
