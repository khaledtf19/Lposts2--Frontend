import { FC } from "react";
import { BackDropProps } from "../../interfaces/utilsInterfaces";
import styles from "./BackDrop.module.scss";

const BackDrop: FC<BackDropProps> = ({ children, onClick }) => {
  return (
    <div className={styles.DropBack} onClick={() => onClick()}>
      {children}
    </div>
  );
};

export default BackDrop;
