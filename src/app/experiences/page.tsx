'use client';

import {
  faBuilding,
  faClock,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PropsWithChildren, useCallback, useState } from 'react';

import { allExperiences } from 'contentlayer/generated';
import { css } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';

const sortedExps = allExperiences.sort((a, b) =>
  b.startDate.localeCompare(a.startDate),
);
type ExperiencesProps = {};

function Experiences(_props: PropsWithChildren<ExperiencesProps>) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <Show when={!openModal}>
        <Flex>
          <Text variant="h1">Experiences</Text>
        </Flex>
        <Flex direction="column">
          {sortedExps.map((exp) => {
            return (
              <Link href={`/experiences/${exp.slug}`} key={exp._id}>
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
                    <Text
                      className={css({
                        marginLeft: '4px',
                      })}>
                      {new Intl.DateTimeFormat(['en-GB', 'id'], {
                        month: 'short',
                        year: 'numeric',
                      }).format(new Date(exp.startDate))}{' '}
                      -{' '}
                    </Text>
                    <Text>
                      {new Intl.DateTimeFormat(['en-GB', 'id'], {
                        month: 'short',
                        year: 'numeric',
                      }).format(new Date(exp.endDate))}
                    </Text>
                  </Flex>

                  <Flex alignItems="center">
                    <FontAwesomeIcon icon={faBuilding} />
                    <Text className={css({ marginLeft: '4px' })}>
                      {exp.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <Text className={css({ marginLeft: '4px' })}>
                      {exp.role}
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

export default Experiences;
