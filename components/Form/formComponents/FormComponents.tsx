import { FC } from "react";
import {
  FormInputProps,
  FormHeaderProps,
  FormSubmitBtnProps,
} from "./FormComponentsInterfaces";
import style from "./FormComponents.module.scss";

export const FormInput: FC<FormInputProps> = ({
  name,
  label,
  type,
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <div className={style.input__container}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={style.input}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
      {errorMessage && <p className={style.error}>{errorMessage}</p>}
    </div>
  );
};

export const FormHeader: FC<FormHeaderProps> = ({ text }) => {
  return (
    <div className={style.header__container}>
      <h1 className={style.header}>{text}</h1>
    </div>
  );
};

export const FormSubmitBtn: FC<FormSubmitBtnProps> = ({ text }) => {
  return (
    <button type="submit" className={style.btn}>
      {text}
    </button>
  );
};
