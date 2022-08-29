import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormContainer from "../../../containers/formContainer/FormContainer";
import {
  FormHeader,
  FormInput,
  FormSubmitBtn,
} from "../formComponents/FormComponents";

import utilsStyles from "../../../styles/utils.module.scss";
import { LoginInputs } from "./LoginFormInterface";
import { useGetUser } from "../../../hooks/authHooks";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const { refetch } = useGetUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputs) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      body: JSON.stringify({ username: data.email, password: data.password }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const fData = await response.json();
    if (fData.data.access_token) {
      localStorage.setItem(
        "Lposts2__token",
        JSON.stringify(fData.data.access_token)
      );
      refetch().then(() => router.push("/profile"));
    }
    console.log(fData);
  };

  return (
    <FormContainer>
      <form className={utilsStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormHeader text="Login" />
        <FormInput
          name="email"
          label="Email:"
          type="text"
          placeholder="Email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <FormInput
          name="password"
          label="Password: "
          type="password"
          placeholder="Password"
          register={register("password")}
          errorMessage={errors.password?.message}
        />
        <FormSubmitBtn text="Login" />
      </form>
    </FormContainer>
  );
};

export default LoginForm;
