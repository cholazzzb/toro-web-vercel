'use client';

import { faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PropsWithChildren, useCallback, useState } from 'react';

import { allProjects } from 'contentlayer/generated';
import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';

const sortedProjects = allProjects.sort((a, b) => b.date.localeCompare(a.date));
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
          {sortedProjects.map((proj) => {
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
                    <FontAwesomeIcon icon={faClock} />
                    <Text>
                      {new Intl.DateTimeFormat(['en-GB', 'id'], {
                        month: 'short',
                        year: 'numeric',
                      }).format(new Date(proj.date))}
                    </Text>
                  </Flex>

                  <Flex alignItems="center">
                    <FontAwesomeIcon icon={faBuilding} />
                    <Text className={css({ marginLeft: '4px' })}>
                      {proj.title}
                    </Text>
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
