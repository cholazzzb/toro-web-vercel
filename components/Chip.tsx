import styles from './Chip.module.css';

type ChipProps = {
  children: React.ReactNode;
  color?: string;
};

const Chip = ({ children, color = 'black' }: ChipProps) => {
  return <div className={`${styles.chip} ${styles[color]}`}>{children}</div>;
};

export default Chip;
