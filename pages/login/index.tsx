import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import ProtectedPage from "../../components/protectedPage/ProtectedPage";

import { useGetUser } from "../../hooks/authHooks";

export const DynamicLoginForm = dynamic(
  () => import("../../components/Form/LoginForm/LoginForm"),
  { suspense: true, ssr: true }
);

const Login: NextPage = () => {
  return (
    <ProtectedPage>
      <Suspense fallback={"loading..."}>
        <DynamicLoginForm />
      </Suspense>
    </ProtectedPage>
  );
};

export default Login;
