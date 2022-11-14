import { keyframes } from "@stitches/react";
import Head from "next/head";
import { ReactNode } from "react";
import { mainTheme } from "src/theme";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Background>
      <Head>
        <title>Toro-web</title>
        <meta
          name="description"
          content="Nicholas Biantoro's Personal Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MovingObject>
        <ul className={styles.circles}>
          {Array(10)
            .fill(null)
            .map((_, idx) => (
              <li key={idx}></li>
            ))}
        </ul>
      </MovingObject>
      <Main>{children}</Main>
    </Background>
  );
};

const gradientBackground = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});
const Background = mainTheme.styled("div", {
  backgroundSize: "400% 400%",
  animation: `${gradientBackground} 15s ease infinite`,
});

const Main = mainTheme.styled("main", {
  zIndex: 1,
  position: "absolute",
  width: "100vw",
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const MovingObject = mainTheme.styled("div", {
  zIndex: 0,
});
