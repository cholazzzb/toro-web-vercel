import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { useCallback, useState } from 'react';

import { CardBody, CardHead } from 'components/Card';
import ImageContainer from 'components/ImageContainer';
import { Layout } from 'components/Layout';
import NavButton from 'src/components/NavButton';
import Show from 'src/components/Show';
import { GlassCard } from 'src/presentational/components';
import { mainTheme } from 'src/theme';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <Layout>
      <Show when={!openModal}>
        <Card>
          <CardHead>
            <ImageContainer size={200} shape="round">
              <Image
                src="/images/profile.png"
                alt="profile"
                layout="fill"
                objectFit="cover"
                priority
              />
            </ImageContainer>
          </CardHead>
          <CardBody>
            <Text fontSize="20px" fontWeight={700}>
              Hi, I&apos; m Nic!
            </Text>
            <Text>Software Engineer</Text>
          </CardBody>
        </Card>
      </Show>
      <NavButton open={openModal} onClick={toggleModal} />
    </Layout>
  );
};

export default Home;

const Card = mainTheme.styled(GlassCard, {
  width: '300px',
  height: '500px',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});
