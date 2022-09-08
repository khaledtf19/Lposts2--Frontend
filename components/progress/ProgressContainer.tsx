import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface ProgressContainerProps {
  animationDuration: number;
  isFinished: boolean;
  children: ReactNode;
}

const ProgressContainer: FC<ProgressContainerProps> = ({
  animationDuration,
  isFinished,
  children,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

export default ProgressContainer;
