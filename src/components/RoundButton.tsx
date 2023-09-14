import { PropsWithChildren } from 'react';

import { Glassy } from './Glass';

type RoundButtonProps = {
  onClick?: () => void;
};

function RoundButton(props: PropsWithChildren<RoundButtonProps>) {
  return (
    <Glassy
      display="flex"
      width="70px"
      height="70px"
      borderRadius="50%"
      borderColor="rgba(255,255,255,0.8)"
      borderWidth="2px"
      justifyContent="center"
      alignItems="center"
      onClick={props.onClick}
    >
      {props.children}
    </Glassy>
  );
}

export default RoundButton;
