import { ReactNode } from 'react';
import styles from './ImageContainer.module.css';

type ImageContainerProps = {
  size: number;
  shape: string;
  children?: ReactNode;
};

const ImageContainer = ({ size, shape, children }: ImageContainerProps) => {
  let containerStyle;
  switch (shape) {
    case 'round':
      containerStyle = styles.round;
      break;

    default:
      break;
  }

  return (
    <div style={{ width: size, height: size }} className={containerStyle}>
      {children}
    </div>
  );
};

export default ImageContainer;
