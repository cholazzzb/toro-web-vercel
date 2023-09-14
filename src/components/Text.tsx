import { PropsWithChildren } from 'react';
import { TextVariant, text } from 'styled-system/recipes';

type TextProps = PropsWithChildren<Partial<TextVariant>>;
export function Text(props: TextProps) {
  return <p className={text(props)}>{props.children}</p>;
}
