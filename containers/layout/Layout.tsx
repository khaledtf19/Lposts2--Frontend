import { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Layout.module.scss";
import ErrorPopup from "../../components/errorPopup/ErrorPopup";

import Progress from "../../components/progress/Progress";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAnimation } from "../../features/loading/loadingSlice";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAnimation = useAppSelector(
    (state) => state.rootReducer.loading.value.isAnimation
  );

  useEffect(() => {
    const handleStart = () => {
      dispatch(setAnimation(true));
    };

    const handleStop = () => {
      dispatch(setAnimation(false));
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <Progress isAnimating={isAnimation} />

      <main className={styles.layout__main}>{children}</main>
      <ErrorPopup />
    </div>
  );
};
export default Layout;
