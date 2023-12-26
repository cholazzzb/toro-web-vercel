'use client';

import { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useCallback, useState, type PropsWithChildren } from 'react';

import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import MDXComponents from 'src/components/mdx-components';
import { Flex, styled } from 'src/styled-system/jsx';

type ContentProps = {
  blog: Blog;
};

function Content(props: PropsWithChildren<ContentProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const Component = useMDXComponent(props.blog.body.code);

  return (
    <>
      <Show when={!openModal}>
        <Flex marginX="10">
          <article>
            <div>
              <Text size="lg">{props.blog.title}</Text>
              <Flex alignItems="center">
                <time dateTime={props.blog.date}>
                  <Text>{new Date(props.blog.date).toLocaleDateString()}</Text>
                </time>
                <styled.span aria-hidden marginInline={2}>
                  •
                </styled.span>
                <Text>{props.blog.readingTime.text}</Text>
              </Flex>
            </div>
            <Flex marginTop={10} flexDirection="column">
              <Component components={MDXComponents} />
            </Flex>
          </article>
        </Flex>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </>
  );
}

export default Content;
