import { FC} from "react";
import { ButtonProps, TextAreaProps } from "../../interfaces/utils.Interface";

import styles from "./Utilities.module.scss";

export const Button: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button onClick={() => onClick()} className={styles.button} type={type}>
      {text}
    </button>
  );
};

export const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  min,
  max,
  placeholder,
}) => {
  return (
    <textarea
      onChange={(e) => onChange(e)}
      value={value}
      minLength={min}
      maxLength={max}
      className={styles.textarea}
      placeholder={placeholder}
      spellCheck="true"
    />
  );
};
