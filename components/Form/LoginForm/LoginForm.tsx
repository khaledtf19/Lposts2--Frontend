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
import axios from "axios";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const { refetch } = useGetUser();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputs) => {
    try {
      const response = await axios.post(
        "https://lposts-2.herokuapp.com/auth/login",
        { username: data.email, password: data.password }
      );
      const fData = response.data;
      if (fData.data.access_token) {
        localStorage.setItem(
          "Lposts2__token",
          JSON.stringify(fData.data.access_token)
        );
        refetch().then(() => router.push("/"));
      }
      console.log(fData);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
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
