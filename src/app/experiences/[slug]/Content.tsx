'use client';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Experiences } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useCallback, useState, type PropsWithChildren } from 'react';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import MDXComponents from 'src/components/mdx-components';
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
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  width="30px"
                  padding="2px"
                  marginRight="4px"
                >
                  <FontAwesomeIcon icon={faClock} />
                </Flex>
                <time dateTime={props.exp.startDate}>
                  <Text>
                    {new Intl.DateTimeFormat(['en-GB', 'id'], {
                      month: 'short',
                      year: 'numeric',
                    }).format(new Date(props.exp.startDate))}{' '}
                    -{' '}
                  </Text>
                </time>
                <time dateTime={props.exp.startDate}>
                  <Text>
                    {' '}
                    {new Intl.DateTimeFormat(['en-GB', 'id'], {
                      month: 'short',
                      year: 'numeric',
                    }).format(new Date(props.exp.endDate))}
                  </Text>
                </time>
              </Flex>
            </div>
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
