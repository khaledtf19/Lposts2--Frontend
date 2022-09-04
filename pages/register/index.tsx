import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import ProtectedPage from "../../components/protectedPage/ProtectedPage";

const DynamicRegisterForm = dynamic(
  () => import("../../components/Form/RegisterForm/RegisterForm"),
  {
    suspense: true,
    ssr: true,
  }
);

const Register: NextPage = () => {
  return (
    <ProtectedPage>
      <Suspense fallback={`Loading...`}>
        <DynamicRegisterForm />
      </Suspense>
    </ProtectedPage>
  );
};

export default Register;
