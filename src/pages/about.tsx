import { Icon } from "@chakra-ui/react";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeButton from "components/about/HomeButton";
import { CardHead, RowCard } from "components/Card";
import Profile from "components/home/Profile";
import ImageContainer from "components/ImageContainer";
import { Layout } from "components/Layout";
import Typography from "components/Typography";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconButton } from "src/components/Button";
import { BookIcon } from "src/components/icon/BookIcon";
import { ChessIcon } from "src/components/icon/ChessIcon";
import { CodeIcon } from "src/components/icon/CodeIcon";
import { CodepenIcon } from "src/components/icon/CodepenIcon";
import { GithubIcon } from "src/components/icon/GithubIcon";
import { InstagramIcon } from "src/components/icon/InstagramIcon";
import { LinkedInIcon } from "src/components/icon/LinkedInIcon";
import { MusicIcon } from "src/components/icon/MusicIcon";
import { mainTheme } from "src/theme";

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
      <ProfileCard>
        <ProfileIdentity>
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
        </ProfileIdentity>

        <VerticalCollection>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/work.svg" bgColor="green.500" />
              <Typography>Experiences</Typography>

              <ProfileDetailButton onClick={openExpModal}>
                <IconContainer>
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
              </ProfileDetailButton>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/brain.svg" bgColor="red.500" />
              <Typography>Projects</Typography>
              <Link href="/projects">
                <a>
                  <ProfileDetailButton>
                    <IconContainer>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </IconContainer>
                  </ProfileDetailButton>
                </a>
              </Link>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton
                iconSrc="/icons/publication.svg"
                bgColor="yellow.500"
              />
              <Typography>Publications</Typography>
              <ProfileDetailButton onClick={openPubModal}>
                <IconContainer>
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
              </ProfileDetailButton>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <IconButton iconSrc="/icons/trophy.svg" bgColor="blue.500" />
              <Typography>Accomplishments</Typography>
              <ProfileDetailButton onClick={openAccompModal}>
                <IconContainer>
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
              </ProfileDetailButton>
            </CardHead>
          </RowCard>
        </VerticalCollection>

        <Typography>More about me:</Typography>
        <HorizontalCollection>
          <LinkIcon
            target="_blank"
            href="https://github.com/cholazzzb"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={GithubIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://linkedin.com/in/nicholas-biantoro/"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={LinkedInIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://instagram.com/toro.nic"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={InstagramIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://codepen.io/nicholastoro"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={CodepenIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://www.goodreads.com/user/show/138401906-nicholas-biantoro"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={BookIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://leetcode.com/torocholazzz/"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={CodeIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>

          <LinkIcon
            target="_blank"
            href="https://www.chess.com/member/cholazzzb"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={ChessIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>
          <LinkIcon
            target="_blank"
            href="https://musescore.com/user/35444237"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <Icon as={MusicIcon} fontSize="20px" />
            </IconContainer>
          </LinkIcon>
        </HorizontalCollection>
      </ProfileCard>
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

const ProfileCard = mainTheme.styled("div", {
  width: "355px",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  color: "white",
});

const ProfileIdentity = mainTheme.styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: "5px",
  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  marginBottom: "20px",
});

const ProfileDetailButton = mainTheme.styled("button", {
  width: "35px",
  height: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
  borderRadius: "4px",
  backgroundColor: "$gray3",
});

const IconContainer = mainTheme.styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "15px",
  height: "15px",
});

const VerticalCollection = mainTheme.styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  overflowY: "scroll",
});

const HorizontalCollection = mainTheme.styled("div", {
  backgroundColor: "$white1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "100%",
  overflowX: "scroll",
});

const LinkIcon = mainTheme.styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  marginInlineEnd: "10px",
});
