import { FC, PropsWithChildren } from "react";
import Navbar from "../../componetns/navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.layout__main}>{children}</main>
    </div>
  );
};
export default Layout;
