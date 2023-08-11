import styles from './Divider.module.css';

type DividerProps = {
  type: 'horizontal' | 'vertical';
};

const Divider = ({ type }: DividerProps) => {
  return <div className={styles[type]}></div>;
};

export default Divider;
