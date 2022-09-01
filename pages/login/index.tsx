import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

import { useGetUser } from "../../hooks/authHooks";

export const DynamicLoginForm = dynamic(
  () => import("../../components/Form/LoginForm/LoginForm"),
  { suspense: true, ssr: true }
);

const Login: NextPage = () => {
  return (
    <>
      <Suspense fallback={"loading..."}>
        <DynamicLoginForm />
      </Suspense>
    </>
  );
};

export default Login;
