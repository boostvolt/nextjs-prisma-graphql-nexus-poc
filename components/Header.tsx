import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const router = useRouter();

  function isActive(pathname: string) {
    return router.pathname === pathname;
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.bold} data-active={isActive("/")}>
            Blog
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/signup">
          <a className={styles.link} data-active={isActive("/signup")}>
            Sign Up
          </a>
        </Link>
        <Link href="/create">
          <a className={styles.link} data-active={isActive("/create")}>
            + Create Post
          </a>
        </Link>
      </div>
    </nav>
  );
};
