import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Layout } from "components/Layout";
import { IconButton } from "components/Button";
import HomeButton from "components/about/HomeButton"
import { Card, CardHead, RowCard } from "components/Card";
import {
  HorizontalCollection,
  VerticalCollection,
} from "components/Collection";
import ImageContainer from "components/ImageContainer";
import Typography from "components/Typography";
import Profile from "components/home/Profile";

const About = () => {
  const [expModalOpen, setExpModalOpen] = useState<boolean>(false);
  const openExpModal = () => setExpModalOpen(true);
  const closeExpModal = () => setExpModalOpen(false);
  const [pubModalOpen, setPubModalOpen] = useState<boolean>(false);
  const openPubModal = () => setPubModalOpen(true);
  const closePubModal = () => setPubModalOpen(false);
  const [accompModalOpen, setaccompModalOpen] = useState<boolean>(false);
  const openAccompModal = () => setaccompModalOpen(true);
  const closeAccompModal = () => setaccompModalOpen(false);

  return (
    <Layout>
      <Card>
        <CardHead>
          <ImageContainer size={80} shape="round">
            <Image
              src="/images/profile.png"
              alt="profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </ImageContainer>
          <Profile />
        </CardHead>

        <VerticalCollection itemHeight={70}>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/work.svg" color="green" />
              <Typography>Experiences</Typography>
              <IconButton
                onClick={openExpModal}
                iconSrc="/icons/right.svg"
                color="gray"
              />
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/brain.svg" color="red" />
              <Typography>Projects</Typography>
              <Link href="/projects">
                <a>
                  <IconButton iconSrc="/icons/right.svg" color="gray" />
                </a>
              </Link>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/publication.svg" color="yellow" />
              <Typography>Publications</Typography>
              <IconButton
                onClick={openPubModal}
                iconSrc="/icons/right.svg"
                color="gray"
              />
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/trophy.svg" color="blue" />
              <Typography>Accomplishments</Typography>
              <IconButton
                onClick={openAccompModal}
                iconSrc="/icons/right.svg"
                color="gray"
              />
            </CardHead>
          </RowCard>
        </VerticalCollection>

        <Typography>More about me:</Typography>
        <HorizontalCollection>
          <a
            target="_blank"
            href="https://github.com/cholazzzb"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/github.svg" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/nicholas-biantoro/"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/linkedin.svg" />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/toro.nic"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/instagram.svg" />
          </a>
          <a
            target="_blank"
            href="https://codepen.io/nicholastoro"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/codepen.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.goodreads.com/user/show/138401906-nicholas-biantoro"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/book.svg" />
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/torocholazzz/"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/code.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.chess.com/member/cholazzzb"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/chess.svg" />
          </a>
          <a
            target="_blank"
            href="https://musescore.com/user/35444237"
            rel="noopener noreferrer"
          >
            <IconButton iconSrc="/icons/music.svg" />
          </a>
        </HorizontalCollection>
      </Card>
      <HomeButton />

      {expModalOpen &&
        (() => {
          const ExpModal = dynamic(() => import("components/about/ExpModal"));
          return <ExpModal onClose={closeExpModal} />;
        })()}

      {pubModalOpen &&
        (() => {
          const PubModal = dynamic(() => import("components/about/PubModal"));
          return <PubModal onClose={closePubModal} />;
        })()}

      {accompModalOpen &&
        (() => {
          const AccompModal = dynamic(
            () => import("components/about/AccompModal")
          );
          return <AccompModal onClose={closeAccompModal} />;
        })()}
    </Layout>
  );
};

export default About;
