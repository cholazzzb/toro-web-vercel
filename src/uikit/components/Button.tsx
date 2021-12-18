import { Button, ButtonProps } from "@chakra-ui/react";
import Image from "next/image";

interface IconButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
  iconSrc: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { iconSrc, size } = props;
  const sizeVal = size === "small" ? 25 : size === "medium" ? 35 : 45;

  return (
    <Button variant="icon" {...props}>
      <Image
        src={iconSrc}
        alt="icon-button"
        objectFit="cover"
        height={sizeVal}
        width={sizeVal}
      />
    </Button>
  );
};
