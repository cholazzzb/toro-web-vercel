import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "components/Layout";
import { Card, CardHead, CardBody } from "components/Card";
import ImageContainer from "components/ImageContainer";
import AboutButton from "components/home/AboutButton";
import ProjectButton from "components/home/ProjectButton";
import Typography from "components/Typography";
import { IconButton } from "src/uikit/components/Button";

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
          <Typography type="animated-text">Hi, I&apos; m Nic!</Typography>
          <Typography type="small">
            Engineering Physics Fresh Graduate from Bandung Institute of
            Technology
          </Typography>
        </CardBody>
      </Card>
      <AboutButton /> <ProjectButton />
    </Layout>
  );
};

export default Home;
