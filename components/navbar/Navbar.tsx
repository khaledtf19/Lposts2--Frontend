import Link from "next/link";
import { useGetUser } from "../../hooks/authHooks";
import styles from "./Navbar.module.scss";

import {
  IoHomeOutline,
  IoHome,
  IoPersonAddOutline,
  IoPersonAddSharp,
} from "react-icons/io5";
import {
  HiUserGroup,
  HiOutlineUserGroup,
  HiUserCircle,
  HiOutlineUserCircle,
} from "react-icons/hi";

import { RiLoginBoxLine, RiLoginBoxFill } from "react-icons/ri";

import { BiLogOut } from "react-icons/bi";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

const SVGSIZE = 30;

export const NavItem: FC<{
  route: string;
  name?: string;
  Icon: ReactNode;
  IconActive?: ReactNode;
}> = ({ route, name, Icon, IconActive }) => {
  const router = useRouter();
  return (
    <li className={styles.nav__list__item}>
      <Link href={route}>
        <a>
          {router.pathname === route || "/user/" + router.query.id === route ? (
            <>
              {IconActive}
              <p className={styles.activeText}>{name}</p>
              <span className={styles.activeBar}></span>
            </>
          ) : (
            <>
              {Icon}
              <p>{name}</p>
            </>
          )}
        </a>
      </Link>
    </li>
  );
};

export const NavLoggedIn = () => {
  const { data } = useGetUser();
  return (
    <ul className={styles.nav__list}>
      <NavItem
        name="Home"
        route="/"
        Icon={<IoHomeOutline size={SVGSIZE} />}
        IconActive={<IoHome size={SVGSIZE} />}
      />
      <NavItem
        name="Following"
        route="/following"
        Icon={<HiOutlineUserGroup size={SVGSIZE} />}
        IconActive={<HiUserGroup size={SVGSIZE} />}
      />
      <NavItem
        name="Profile"
        route={`/user/${data?._id}`}
        Icon={<HiOutlineUserCircle size={SVGSIZE} />}
        IconActive={<HiUserCircle size={SVGSIZE} />}
      />
      <li
        className={styles.nav__list__item}
        onClick={() => localStorage.removeItem("Lposts2__token")}
      >
        <Link href={`/login`}>
          <a>
            <BiLogOut size={SVGSIZE} />
            <p>Logout</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export const NavNotLogged = () => {
  return (
    <ul className={styles.nav__list}>
      <NavItem
        name="Login"
        route="/login"
        Icon={<RiLoginBoxLine size={SVGSIZE} />}
        IconActive={<RiLoginBoxFill size={SVGSIZE} />}
      />
      <NavItem
        name="Register"
        route="/register"
        Icon={<IoPersonAddOutline size={SVGSIZE} />}
        IconActive={<IoPersonAddSharp size={SVGSIZE} />}
      />
      <NavItem
        name="Home"
        route="/"
        Icon={<IoHomeOutline size={SVGSIZE} />}
        IconActive={<IoHome size={SVGSIZE} />}
      />
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
