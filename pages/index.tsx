import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "components/Layout";
import { Card, CardHead, CardBody } from "components/Card";
import ImageContainer from "components/ImageContainer";
import AboutButton from "components/unique/AboutButton";
import ProjectButton from "components/unique/ProjectButton";
import Typography from "components/Typography";

const Home: NextPage = () => {
  return (
    <Layout>
      <Card>
        <CardHead>
          <ImageContainer size={200} shape="round">
            <Image
              src="/profile.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </ImageContainer>
        </CardHead>
        <CardBody>
          <Typography type="large">Hi, I&apos; m Nic!</Typography>

          <Typography type="small">
            Engineering Physics{" "}
            <Typography type="animated-text">Fresh Graduate</Typography> from
            Bandung Institute of Technology
          </Typography>
        </CardBody>
      </Card>
      <AboutButton /> <ProjectButton />
    </Layout>
  );
};

export default Home;
