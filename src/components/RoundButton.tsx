import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type RoundButtonProps = {
  onClick?: () => void;
};

function RoundButton(props: PropsWithChildren<RoundButtonProps>) {
  return (
    <Flex
      width={50}
      height={50}
      borderRadius="50%"
      borderColor="rgba(255,255,255,0.8)"
      borderWidth={3}
      backgroundColor="rgba(255,255,255,0.1)"
      justifyContent="center"
      alignItems="center"
      onClick={props.onClick}>
      {props.children}
    </Flex>
  );
}

export default RoundButton;
