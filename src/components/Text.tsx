import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import { cx } from 'src/styled-system/css';
import { TextVariant, text } from 'src/styled-system/recipes';

type TextProps = PropsWithChildren<
  Partial<TextVariant> &
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
>;
export function Text({
  children,
  center,
  className,
  variant,
  ...props
}: TextProps) {
  return (
    <p className={cx(text({ variant, center }), className)} {...props}>
      {children}
    </p>
  );
}
