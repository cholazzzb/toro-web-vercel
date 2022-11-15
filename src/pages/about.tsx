import { Icon } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccompModal from 'components/about/AccompModal';
import ExpModal from 'components/about/ExpModal';
import HomeButton from 'components/about/HomeButton';
import PubModal from 'components/about/PubModal';
import { CardHead } from 'components/Card';
import Profile from 'components/home/Profile';
import ImageContainer from 'components/ImageContainer';
import { Layout } from 'components/Layout';
import Typography from 'components/Typography';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BookIcon } from 'src/components/icon/BookIcon';
import { BrainIcon } from 'src/components/icon/BrainIcon';
import { ChessIcon } from 'src/components/icon/ChessIcon';
import { CodeIcon } from 'src/components/icon/CodeIcon';
import { CodepenIcon } from 'src/components/icon/CodepenIcon';
import { GithubIcon } from 'src/components/icon/GithubIcon';
import { InstagramIcon } from 'src/components/icon/InstagramIcon';
import { LinkedInIcon } from 'src/components/icon/LinkedInIcon';
import { MusicIcon } from 'src/components/icon/MusicIcon';
import { PublicationIcon } from 'src/components/icon/PublicationIcon';
import { TrophyIcon } from 'src/components/icon/TrophyIcon';
import { WorkIcon } from 'src/components/icon/WorkIcon';
import { Accomplishment } from 'src/domains/accomplishment/accomplishmentEntity';
import { Experience } from 'src/domains/experience/experienceEntity';
import { Publication } from 'src/domains/publication/publicationEntity';
import { Center, GlassCard } from 'src/presentational/components';
import accompData from 'src/repository/accomplishment/accomplishmentData';
import expData from 'src/repository/experience/experienceData';
import pubData from 'src/repository/publication/publicationData';
import { mainTheme } from 'src/theme';

export async function getStaticProps() {
  return {
    props: {
      accomplishments: accompData,
      experiences: expData,
      publications: pubData,
    },
  };
}

const About: NextPage<{
  accomplishments: Array<Accomplishment>;
  experiences: Array<Experience>;
  publications: Array<Publication>;
}> = (props) => {
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
              <RowCardMain>
                <ExperienceIconContainer>
                  <WorkIcon color="white" />
                </ExperienceIconContainer>
                <Typography>Experiences</Typography>
              </RowCardMain>

              <ProfileDetailButton onClick={openExpModal}>
                <IconContainer>
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
              </ProfileDetailButton>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <RowCardMain>
                <ProjectIconContainer>
                  <BrainIcon color="white" />
                </ProjectIconContainer>
                <Typography>Projects</Typography>
              </RowCardMain>
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
              <RowCardMain>
                <PublicationIconContainer>
                  <PublicationIcon color="white" />
                </PublicationIconContainer>

                <Typography>Publications</Typography>
              </RowCardMain>
              <ProfileDetailButton onClick={openPubModal}>
                <IconContainer>
                  <FontAwesomeIcon icon={faChevronRight} />
                </IconContainer>
              </ProfileDetailButton>
            </CardHead>
          </RowCard>
          <RowCard>
            <CardHead justify="justifyBetween">
              <RowCardMain>
                <AccomplishmentIconContainer>
                  <TrophyIcon color="white" />
                </AccomplishmentIconContainer>
                <Typography>Accomplishments</Typography>
              </RowCardMain>
              <RowCardMain></RowCardMain>
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

      {expModalOpen && (
        <ExpModal experiences={props.experiences} onClose={closeExpModal} />
      )}
      {pubModalOpen && (
        <PubModal publications={props.publications} onClose={closePubModal} />
      )}
      {accompModalOpen && (
        <AccompModal
          accomplishments={props.accomplishments}
          onClose={closeAccompModal}
        />
      )}
    </Layout>
  );
};

export default About;

const ProfileCard = mainTheme.styled(GlassCard, {
  width: '355px',
  height: '100%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});

const ProfileIdentity = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '5px',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  marginBottom: '20px',
});

const ProfileDetailButton = mainTheme.styled('button', {
  width: '35px',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3px',
  borderRadius: '4px',
  backgroundColor: '$gray3',
});

const IconContainer = mainTheme.styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '15px',
  height: '15px',
});

const VerticalCollection = mainTheme.styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflowY: 'scroll',
});

const HorizontalCollection = mainTheme.styled('div', {
  backgroundColor: '$white1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  width: '100%',
  overflowX: 'scroll',
});

const LinkIcon = mainTheme.styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  marginInlineEnd: '10px',
});

const ProfileIcon = mainTheme.styled(Center, {
  width: '50px',
  height: '50px',
  borderRadius: '10px',
  padding: '16px',
  marginInlineEnd: '10px',
});

const ExperienceIconContainer = mainTheme.styled(ProfileIcon, {
  backgroundColor: '$green10',
});

const ProjectIconContainer = mainTheme.styled(ProfileIcon, {
  backgroundColor: '$blue10',
});

const PublicationIconContainer = mainTheme.styled(ProfileIcon, {
  backgroundColor: '$gray10',
});

const AccomplishmentIconContainer = mainTheme.styled(ProfileIcon, {
  backgroundColor: '$black10',
});

const RowCard = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingInline: '5px',
  paddingBlock: '2px',
});

const RowCardMain = mainTheme.styled(Center, {
  height: '100%',
});
