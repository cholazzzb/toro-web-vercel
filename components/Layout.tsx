import { keyframes } from '@stitches/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { mainTheme } from 'src/theme';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Toro-web</title>
        <meta
          name="description"
          content="Nicholas Biantoro's Personal Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundAnimation>
        <Top />
        <Bottom />
        <Left />
        <Right />{' '}
      </BackgroundAnimation>
      <Main>{children}</Main>
    </div>
  );
};

const Main = mainTheme.styled('main', {
  zIndex: 1,
  position: 'absolute',
  width: '100vw',
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const BackgroundAnimation = mainTheme.styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '100vh',
  width: '100%',
  zIndex: -1,
  overflow: 'hidden',
  backgroundImage: 'linear-gradient(80deg, #34278d, #e0d3ef)',
});

const moveDown = keyframes({
  '0%': { top: '-10rem' },
  '100%': {
    top: '-10rem',
  },
  '80%': {
    top: '50rem',
  },
});
const Top = mainTheme.styled('div', {
  position: 'absolute',
  maxHeight: '80rem',
  maxWidth: '80rem',
  height: '100%',
  width: '100%',
  borderRadius: '50%',
  backgroundImage: 'linear-gradient(80deg, #e0d3ef, rgb(192, 60, 165))',
  filter: 'blur(40px)',
  animation: `${moveDown} 30s infinite`,
});

const moveUp = keyframes({
  '0%': { top: '-10rem' },
  '100%': {
    top: '-10rem',
  },
  '80%': {
    top: '50rem',
  },
});

const Bottom = mainTheme.styled('div', {
  position: 'absolute',
  maxHeight: '50rem',
  maxWidth: '50rem',
  height: '100%',
  width: '100%',
  right: '0',
  borderRadius: '50%',
  backgroundImage: 'linear-gradient(80deg, rgb(192, 60, 165), #ebe9ee)',
  filter: 'blur(2rem)',
  animation: `${moveUp} 30s infinite`,
});

const moveRight = keyframes({
  '0%': {
    left: '-10rem',
  },
  '100%': {
    left: '-10rem',
  },
  '80%': {
    left: '80rem',
  },
});
const Left = mainTheme.styled('div', {
  position: 'absolute',
  maxHeight: '50rem',
  maxWidth: '50rem',
  height: '100%',
  width: '100%',
  left: '0',
  borderRadius: '50%',
  backgroundImage: 'linear-gradient(80deg, #ebe9ee, #a42322)',
  filter: 'blur(6rem)',
  animation: `${moveRight} 30s infinite`,
});

const moveLeft = keyframes({
  '0%': {
    right: '-10rem',
  },
  '100%': {
    right: '-10rem',
  },
  '80%': {
    right: '80rem',
  },
});
const Right = mainTheme.styled('div', {
  position: 'absolute',
  maxHeight: '50rem',
  maxWidth: '50rem',
  height: '100%',
  width: '100%',
  right: '0',
  borderRadius: '50%',
  background: 'linear-gradient(80deg, #a42322, #34278d)',
  filter: 'blur(30px)',
  animation: `${moveLeft} 30s infinite`,
});
