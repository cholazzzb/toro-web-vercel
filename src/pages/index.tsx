import { Text } from '@chakra-ui/react';
import { CardBody, CardHead } from 'components/Card';
import AboutButton from 'components/home/AboutButton';
import ProjectButton from 'components/home/ProjectButton';
import ImageContainer from 'components/ImageContainer';
import { Layout } from 'components/Layout';
import type { NextPage } from 'next';
import Image from 'next/image';
import { GlassCard } from 'src/presentational/components';
import { mainTheme } from 'src/theme';

const Home: NextPage = () => {
  return (
    <Layout>
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
      <AboutButton /> <ProjectButton />
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
