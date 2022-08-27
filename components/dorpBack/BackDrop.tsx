import { FC } from "react";
import Container from "../../containers/container/Container";
import { BackDropProps } from "../../interfaces/utilsInterfaces";
import styles from "./BackDrop.module.scss";

const BackDrop: FC<BackDropProps> = ({ children, onClick }) => {
  return (
    <div className={styles.DropBack} onClick={() => onClick()}>
      <div onClick={(e) => e.stopPropagation()} className={styles.container}>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default BackDrop;
