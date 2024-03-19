'use client';

import { Experiences } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useCallback, useState, type PropsWithChildren } from 'react';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import MDXComponents from 'src/components/mdx-components';
import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

type ContentProps = {
  exp: Experiences;
};

function Content(props: PropsWithChildren<ContentProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const Component = useMDXComponent(props.exp.body.code);

  return (
    <>
      <Show when={!openModal}>
        <Flex marginX="10">
          <article>
            <div>
              <Text variant="h6">{props.exp.title}</Text>
              <Flex alignItems="center">
                <time dateTime={props.exp.startDate}>
                  <Text>
                    {new Date(props.exp.startDate).toLocaleDateString()}
                  </Text>
                </time>
              </Flex>
            </div>
            <Flex marginTop={10} flexDirection="column">
              <Glassy className={css({ height: 'full' })}>
                <Component components={MDXComponents} />
              </Glassy>
            </Flex>
          </article>
        </Flex>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </>
  );
}

export default Content;
