import { FC, PropsWithChildren } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Layout.module.scss";
import ErrorPopup from "../../components/errorPopup/ErrorPopup";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.layout__main}>{children}</main>
      <ErrorPopup />
    </div>
  );
};
export default Layout;
