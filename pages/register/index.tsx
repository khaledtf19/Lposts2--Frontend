import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";

const DynamicRegisterForm = dynamic(
  () => import("../../components/Form/RegisterForm/RegisterForm"),
  {
    suspense: true,
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
