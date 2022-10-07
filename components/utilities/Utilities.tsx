import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
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

export const DropDown: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<any>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!detailsRef.current.contains(e.target)) {
        detailsRef.current.open = false;
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", close, true);
    }

    return () => {
      document.removeEventListener("click", close, true);
    };
  }, [detailsRef, isOpen]);

  return (
    <details className={styles.details} ref={detailsRef}>
      <summary
        className={styles.summary}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HiDotsVertical />
      </summary>
      <div className={styles.menu}>{children}</div>
    </details>
  );
};
