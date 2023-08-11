import { Button, ButtonProps, Image } from '@chakra-ui/react';

interface IconButtonProps extends ButtonProps {
  iconSrc: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { iconSrc, ...others } = props;

  return (
    <Button variant="icon" w="50" h="50" {...others}>
      <Image src={iconSrc} alt="icon-button" boxSize="20px" />
    </Button>
  );
};
