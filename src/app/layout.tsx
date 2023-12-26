import 'src/styles/prism.css';

import { Metadata } from 'next';
import { PropsWithChildren, ReactNode } from 'react';

import { css } from 'src/styled-system/css';

export const metadata: Metadata = {
  title: 'Toro-web',
  description: "Nicholas Biantoro's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <BackgroundAnimation>
        <Top />
        <Bottom />
        <Left />
        <Right />
      </BackgroundAnimation>
      <Main>{children}</Main>
    </div>
  );
};

function createComponent(css: string) {
  const Component = function (props: PropsWithChildren) {
    return <div className={css}>{props.children}</div>;
  };
  return Component;
}

const Main = createComponent(
  css({
    zIndex: 1,
    position: 'absolute',
    width: '100vw',
    maxHeight: '100vh',
    paddingBlock: '4rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
  }),
);

const BackgroundAnimation = createComponent(
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100vh',
    width: '100%',
    zIndex: -1,
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(80deg, #34278d, #e0d3ef)',
  }),
);

const Top = createComponent(
  css({
    position: 'absolute',
    maxHeight: '80rem',
    maxWidth: '80rem',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(80deg, #e0d3ef, rgb(192, 60, 165))',
    filter: 'blur(40px)',
    animation: `moveDown 30s infinite`,
  }),
);

const Bottom = createComponent(
  css({
    position: 'absolute',
    maxHeight: '50rem',
    maxWidth: '50rem',
    height: '100%',
    width: '100%',
    right: '0',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(80deg, rgb(192, 60, 165), #ebe9ee)',
    filter: 'blur(2rem)',
    animation: `moveUp 30s infinite`,
  }),
);

const Left = createComponent(
  css({
    position: 'absolute',
    maxHeight: '50rem',
    maxWidth: '50rem',
    height: '100%',
    width: '100%',
    left: '0',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(80deg, #ebe9ee, #a42322)',
    filter: 'blur(6rem)',
    animation: `moveRight 30s infinite`,
  }),
);

const Right = createComponent(
  css({
    position: 'absolute',
    maxHeight: '50rem',
    maxWidth: '50rem',
    height: '100%',
    width: '100%',
    right: '0',
    borderRadius: '50%',
    background: 'linear-gradient(80deg, #a42322, #34278d)',
    filter: 'blur(30px)',
    animation: `moveLeft 30s infinite`,
  }),
);
