import { FC, useEffect, useRef, useState } from "react";

import { HiDotsVertical } from "react-icons/hi";

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

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={styles.details} open={isOpen}>
      <summary className={styles.summary} onClick={() => setIsOpen(!isOpen)}>
        <HiDotsVertical />
      </summary>
      <div className={styles.menu}>
        <div>1</div> <div>2</div>
      </div>
    </details>
  );
};
