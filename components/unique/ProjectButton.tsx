import Link from "next/link";
import Image from "next/image";
import ImageContainer from "components/ImageContainer";
import styles from "./ProjectButton.module.css";
import { Blink } from "components/Animation";

const ProjectButton = () => {
  return (
    <Link href="projects">
      <a>
        <button className={styles.projectButton}>
          My Projects
          <Blink>
            <ImageContainer size={20} shape="round">
              <Image
                src="/right.svg"
                alt="icon-button"
                layout="fill"
                objectFit="cover"
              />
            </ImageContainer>
          </Blink>
        </button>
      </a>
    </Link>
  );
};

export default ProjectButton;
