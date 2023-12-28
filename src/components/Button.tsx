import { PropsWithChildren } from 'react';

import { ButtonVariant, button } from 'src/styled-system/recipes';
import { PureGlassy } from './Glass';

type ButtonProps = { onClick?: () => void } & PropsWithChildren<
  Partial<ButtonVariant>
>;
export function Button(props: ButtonProps) {
  const { onClick, children, ...restProps } = props;
  return (
    <PureGlassy className={button(restProps)} onClick={onClick}>
      {children}
    </PureGlassy>
  );
}
