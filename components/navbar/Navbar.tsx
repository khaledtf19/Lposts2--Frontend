import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

export const Logged = () => {
  return <div>logged</div>;
};

export const NotLogged = () => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__list__item}>
        <Link href={`login`}>
          <a>login</a>
        </Link>
      </li>
      <li className={styles.nav__list__item}>
        <Link href={`register`}>
          <a>register</a>
        </Link>
      </li>
      <li className={styles.nav__list__item}>
        <Link href={`profile`}>
          <a>profile</a>
        </Link>
      </li>
    </ul>
  );
};

function Navbar() {
  return (
    <div className={styles.nav__container}>
      <NotLogged />
    </div>
  );
}

export default Navbar;
