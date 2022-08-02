import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormContainer from "../../../containers/formContainer/FormContainer";
import {
  FormInput,
  FormHeader,
  FormSubmitBtn,
} from "../formComponents/FormComponents";

import utilsStyles from "../../../styles/utils.module.scss";
import { RegisterInputs } from "./RegisterFormInterface";

const registerSchema = yup.object().shape({
  name: yup.string().min(2).required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8)
    .oneOf([yup.ref("password"), null])
    .required("confirm Password is required"),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterInputs) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <form className={utilsStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormHeader text="Register" />
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
