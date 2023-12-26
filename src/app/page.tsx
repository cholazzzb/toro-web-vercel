'use client';

import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { useCallback, useState } from 'react';

import { Glassy } from 'src/components/Glass';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import { Flex } from 'src/styled-system/jsx';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <Show when={!openModal}>
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Glassy
            width="300px"
            height="500px"
            padding="30px"
            marginBlock="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            color="white"
          >
            <Flex>
              <Flex
                width="200px"
                height="200px"
                position="relative"
                overflow="hidden"
                borderRadius="50%"
              >
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </Flex>
            </Flex>
            <Flex direction="column">
              <Text size="lg">Hi, I&apos; m Nic!</Text>
              <Text>Software Engineer</Text>
            </Flex>
          </Glassy>
        </Flex>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </>
  );
};

export default Home;
