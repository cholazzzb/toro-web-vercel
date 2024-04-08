import { PropsWithChildren } from 'react';

import { styled } from 'src/styled-system/jsx';

export function Icon(props: PropsWithChildren) {
  return (
    <styled.span
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10px"
      width="10px"
      marginInlineEnd="10px"
    >
      {props.children}
    </styled.span>
  );
}
