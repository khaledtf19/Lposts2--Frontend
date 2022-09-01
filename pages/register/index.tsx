import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

const DynamicRegisterForm = dynamic(
  () => import("../../components/Form/RegisterForm/RegisterForm"),
  {
    suspense: true,
    ssr: true,
  }
);

const Register: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicRegisterForm />
    </Suspense>
  );
};

export default Register;
