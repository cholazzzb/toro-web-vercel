import Image from "next/image";
import styles from "./Button.module.css";

type FloatingButtonProps = {
  color?: string;
  onClick?: () => void;
  iconSrc: string;
};
export const FloatingButton = ({
  color = "green",
  onClick,
  iconSrc,
}: FloatingButtonProps) => {
  let colorButton;

  switch (color) {
    case "green":
      colorButton = styles.green;
      break;

    default:
      break;
  }
  return (
    <button
      className={`${styles.floatingButton} ${styles.green}`}
      onClick={onClick}
    >
      <span className={styles.floatingIcon}>
        <Image
          src={iconSrc}
          alt="floating-button"
          layout="fill"
          objectFit="cover"
        />
      </span>
    </button>
  );
};
