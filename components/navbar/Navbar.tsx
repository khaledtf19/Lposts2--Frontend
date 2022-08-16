import Link from "next/link";
import React from "react";
import { UseGetUser } from "../../hooks/authHooks";
import styles from "./Navbar.module.scss";

export const NavLoggedIn = () => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__list__item}>
        <Link href={`/`}>
          <a>Home</a>
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

export const NavNotLogged = () => {
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
  const { data } = UseGetUser();
  return (
    <nav className={styles.nav__container}>
      {data ? <NavLoggedIn /> : <NavNotLogged />}
    </nav>
  );
}

export default Navbar;
