import { ReactNode } from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  type?: string;
  children: ReactNode;
};

const Typography = ({ type="small", children }: TypographyProps) => {
  let textStyle;
  switch (type) {
    case "animated-text":
      textStyle = styles.animatedText;
      break;

    case "small":
      textStyle = styles.small;
      break;

    case "large":
      textStyle = styles.large;
      break;

    default:
      break;
  }

  return <p className={textStyle}>{children}</p>;
};

export default Typography;
