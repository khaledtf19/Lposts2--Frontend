import { FC } from "react";
import styles from "./progress.module.scss";

export interface BarProps {
  animationDuration: number;
  progress: number;
}

const Bar: FC<BarProps> = ({ animationDuration, progress }) => {
  return (
    <div
      className={styles.bar}
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    >
      Bar
    </div>
  );
};

export default Bar;
