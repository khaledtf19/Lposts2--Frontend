import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { useGetUser } from "../../hooks/authHooks";

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useGetUser();
  const router = useRouter();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (data) {
    router.push("/");
    return <h2>Loading...</h2>;
  }

  return <>{children}</>;
};

export default ProtectedPage;
