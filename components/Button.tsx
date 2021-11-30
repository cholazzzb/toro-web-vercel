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

type IconButtonProps = {
  color?: string;
  size?: "small" | "medium" | "large";
  iconSrc: string;
  onClick?: () => void;
};
export const IconButton = ({
  color = "white",
  size = "small",
  onClick,
  iconSrc,
}: IconButtonProps) => {
  const sizeVal = size === "small" ? 25 : size === "medium" ? 35 : 45;

  return (
    <button
      onClick={onClick}
      className={`${styles.iconButton} ${styles[color]} ${styles[size]}`}
    >
      <Image
        src={iconSrc}
        alt="icon-button"
        objectFit="cover"
        height={sizeVal}
        width={sizeVal}
      />
    </button>
  );
};
