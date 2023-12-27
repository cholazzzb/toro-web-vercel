import { PropsWithChildren } from 'react';

import { ButtonVariant, button } from 'src/styled-system/recipes';
import { PureGlassy } from './Glass';

type ButtonProps = { onClick?: () => void } & PropsWithChildren<
  Partial<ButtonVariant>
>;
export function Button(props: ButtonProps) {
  const { onClick, ...restProps } = props;
  return (
    <PureGlassy className={button(restProps)} onClick={onClick}>
      {props.children}
    </PureGlassy>
  );
}
