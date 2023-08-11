import Link from 'next/link';
import Image from 'next/legacy/image';
import ImageContainer from 'components/ImageContainer';
import styles from './ProjectButton.module.css';
import { Blink } from 'components/Animation';

const ProjectButton = () => {
  return (
    <Link href="/projects">
      <button className={styles.projectButton}>
        My Projects
        <Blink>
          <ImageContainer size={20} shape="round">
            <Image
              src="/icons/right.svg"
              alt="icon-button"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        </Blink>
      </button>
    </Link>
  );
};

export default ProjectButton;
