import { FC } from "react";
import { PacmanLoader } from "react-spinners";
import utilStyles from "../../styles/utils.module.scss";

const LoadingPage: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={utilStyles.loadingPage}>
      <PacmanLoader loading={isLoading} color={"#fff"} />
    </div>
  );
};

export default LoadingPage;
