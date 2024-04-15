'use client';

import { faFeather, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
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
                  <Flex alignItems="center">
                    <Text variant="h4">{proj.title}</Text>
                  </Flex>
                  <Flex>
                    <Flex
                      justifyContent="center"
                      width="30px"
                      paddingX="2px"
                      paddingTop="5px"
                      marginRight="4px">
                      <FontAwesomeIcon icon={faFeather} />
                    </Flex>
                    <Flex>
                      <Text>{proj.description}</Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <Flex
                      justifyContent="center"
                      width="30px"
                      paddingX="2px"
                      paddingTop="4px"
                      marginRight="4px">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </Flex>
                    <Flex>
                      <Text>{proj.skills}</Text>
                    </Flex>
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
