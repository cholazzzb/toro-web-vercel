'use client';

import { Project } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { useCallback, useState, type PropsWithChildren } from 'react';
import { Glassy } from 'src/components/Glass';

import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import MDXComponents from 'src/components/mdx-components';
import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

type ContentProps = {
  project: Project;
};

function Content(props: PropsWithChildren<ContentProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const Component = useMDXComponent(props.project.body.code);

  return (
    <>
      <Show when={!openModal}>
        <Flex marginX="10">
          <article>
            <Flex alignItems="center">
              <Link href="/projects">
                <Text
                  variant="h6"
                  className={css({ textDecoration: 'underline' })}>
                  Projects
                </Text>
              </Link>
              <Text variant="h6">/</Text>
              <Text variant="h6"> {props.project.title}</Text>
            </Flex>
            <Flex marginTop={10} flexDirection="column">
              <Glassy flexDirection="column" padding="8px">
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
