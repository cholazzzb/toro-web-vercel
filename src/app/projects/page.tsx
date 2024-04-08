'use client';

import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PropsWithChildren, useCallback, useState } from 'react';

import { allProjects } from 'contentlayer/generated';
import { Flex } from 'src/styled-system/jsx';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';

type ExperiencesProps = {};

function Projects(_props: PropsWithChildren<ExperiencesProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <Show when={!openModal}>
        <Flex>
          <Text variant="h1">Projects</Text>
        </Flex>
        <Flex direction="column">
          {allProjects.map((proj) => {
            return (
              <Link href={`/projects/${proj.slug}`} key={proj._id}>
                <Glassy
                  direction="column"
                  borderColor="white"
                  borderWidth="1px"
                  padding="20px"
                  marginInline="30px"
                  marginBlockEnd="15px"
                  borderRadius="7px"
                  backgroundColor="rgba(255,255,255,0.3)">
                  <Flex alignItems="center"></Flex>

                  <Flex alignItems="center">
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      width="30px"
                      padding="2px"
                      marginRight="4px">
                      <FontAwesomeIcon icon={faFeather} />
                    </Flex>
                    <Text>{proj.title}</Text>
                  </Flex>
                </Glassy>
              </Link>
            );
          })}
        </Flex>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </>
  );
}

export default Projects;
