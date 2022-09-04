import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormContainer from "../../../containers/formContainer/FormContainer";
import {
  FormInput,
  FormHeader,
  FormSubmitBtn,
  FormAvatarInput,
} from "../formComponents/FormComponents";
import { RegisterInputs } from "./RegisterFormInterface";
import axios from "axios";
import { addError } from "../../../features/error/errorSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

import utilsStyles from "../../../styles/utils.module.scss";

const registerSchema = yup.object().shape({
  avatar: yup.string().min(1).max(50).required("Avatar is required"),
  name: yup.string().min(3).max(50).required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8)
    .oneOf(
      [yup.ref("password"), null],
      "confirm password doesn't match with password"
    )
    .required("confirm Password is required"),
});

function RegisterForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInputs) => {
    try {
      const res = await axios.post(
        "https://lposts-2.herokuapp.com/users",
        data
      );
      if (res.data) {
        router.push("/login");
      }
    } catch (err: any) {
      console.log(err.response.data.message);
      dispatch(addError([err.response.data.message]));
    }
  };

  return (
    <FormContainer>
      <form className={utilsStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormHeader text="Register" />
        <FormAvatarInput
          name="avatar"
          label=":"
          type="text"
          placeholder="you can Change your avatar"
          register={register("avatar")}
          errorMessage={errors.avatar?.message}
        />
        <FormInput
          name="name"
          label="Name:"
          type="text"
          placeholder="Name"
          register={register("name")}
          errorMessage={errors.name?.message}
        />
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
        <FormInput
          name="confirmPassword"
          label="Confirm Password:"
          type="password"
          placeholder="Confirm Password..."
          register={register("confirmPassword")}
          errorMessage={errors.confirmPassword?.message}
        />
        <FormSubmitBtn text="Register" />
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
