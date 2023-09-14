import { PropsWithChildren } from 'react';

type ShowProps = {
  when: boolean;
};

function Show(props: PropsWithChildren<ShowProps>) {
  return props.when ? props.children : null;
}

export default Show;
