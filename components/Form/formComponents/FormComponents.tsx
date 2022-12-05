import { FC, useEffect, useState } from "react";
import {
  FormInputProps,
  FormHeaderProps,
  FormSubmitBtnProps,
  FormAvatarInputProps,
} from "./FormComponentsInterfaces";
import style from "./FormComponents.module.scss";
import Image from "next/image";

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

export const FormAvatarInput: FC<FormAvatarInputProps> = ({
  name,
  label,
  type,
  placeholder,
  register,
  errorMessage,
}) => {
  const [avatar, setAvatar] = useState("");

  return (
    <div className={style.input__container}>
      <div className={style.avatar__container}>
        <Image
          src={`https://lposts2.onrender.com/api/bottts/:${avatar}.svg`}
          alt={`${avatar}`}
          width={100}
          height={100}
        />
      </div>
      <label className={style.label} htmlFor="avatar">
        Avatar:
      </label>
      <input
        className={style.input}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
        onChange={(e) => {
          setAvatar(e.target.value);
        }}
      />
      {errorMessage && <p className={style.error}>{errorMessage}</p>}
    </div>
  );
};
