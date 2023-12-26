import { ComponentProps } from 'react';
import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

export function Glassy(props: ComponentProps<typeof Flex>) {
  const { children, ...rest } = props;
  return (
    <Flex
      className={css({
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        borderRadius: '15px',
        backgroundColor: 'rgba(200, 200, 200, 0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.5)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(5px)',
      })}
      {...rest}
    >
      {children}
    </Flex>
  );
}
