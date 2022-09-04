import Link from "next/link";
import { useGetUser } from "../../hooks/authHooks";
import styles from "./Navbar.module.scss";

export const NavLoggedIn = () => {
  const { data } = useGetUser();
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__list__item}>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.nav__list__item}>
        <Link href={`/user/${data?._id}`}>
          <a>profile</a>
        </Link>
      </li>
      <li
        className={styles.nav__list__item}
        onClick={() => localStorage.removeItem("Lposts2__token")}
      >
        <Link href={`/login`}>
          <a>Logout</a>
        </Link>
      </li>
    </ul>
  );
};

export const NavNotLogged = () => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__list__item}>
        <Link href={`/login`}>
          <a>login</a>
        </Link>
      </li>
      <li className={styles.nav__list__item}>
        <Link href={`/register`}>
          <a>register</a>
        </Link>
      </li>
      <li className={styles.nav__list__item}>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </li>
    </ul>
  );
};

function Navbar() {
  const { data } = useGetUser();

  return (
    <nav className={styles.nav__container}>
      {data ? <NavLoggedIn /> : <NavNotLogged />}
    </nav>
  );
}

export default Navbar;
