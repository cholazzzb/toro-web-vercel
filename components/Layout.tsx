import { ReactNode } from "react";
import Head from "next/head";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.background}>
      <Head>
        <title>Toro-web</title>
        <meta
          name="description"
          content="Nicholas Biantoro's Personal Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.movingObject}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
