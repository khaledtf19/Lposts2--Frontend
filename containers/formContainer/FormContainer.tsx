import React, { FC, PropsWithChildren } from "react";
import Container from "../container/Container";
import styles from "./FormContainer.module.scss";

const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <div className={styles.from__container}>{children}</div>
    </Container>
  );
};

export default FormContainer;
