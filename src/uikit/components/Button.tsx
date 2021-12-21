import { Button, ButtonProps, Image } from "@chakra-ui/react";

interface IconButtonProps extends ButtonProps {
  iconSrc: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { iconSrc } = props;

  return (
    <Button variant="icon" w="50" h="50" {...props}>
      <Image src={iconSrc} alt="icon-button" layout="fill" boxSize="20px" />
    </Button>
  );
};
