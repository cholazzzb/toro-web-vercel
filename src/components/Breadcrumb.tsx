import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';
import { Text } from './Text';

export function Breadcrumb(props: PropsWithChildren) {
  return <Flex>{props.children}</Flex>;
}

export function BreadcrumbItem({
  isCurrentPage = false,
  children,
}: PropsWithChildren<{ isCurrentPage?: boolean }>) {
  return (
    <div
      className={css({
        display: 'flex',
        height: '50px',
        alignItems: 'center',
      })}
    >
      {children}
      {!isCurrentPage && (
        <div className={css({ marginInline: '4px' })}> / </div>
      )}
    </div>
  );
}

type BreadcrumbLinkProps = PropsWithChildren<{
  href: string;
  textDecoration?: 'underline' | 'none';
}>;
export function BreadcrumbLink(props: BreadcrumbLinkProps) {
  return (
    <Link
      href={props.href}
      className={css({ textDecoration: props.textDecoration })}
    >
      <Text>{props.children}</Text>
    </Link>
  );
}
