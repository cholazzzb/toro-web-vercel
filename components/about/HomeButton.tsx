import Link from "next/link";
import Image from "next/image";
import ImageContainer from "components/ImageContainer";
import styles from "./HomeButton.module.css";
import { Blink } from "components/Animation";

const ProjectButton = () => {
  return (
    <Link href="/">
      <a>
        <button className={styles.homeButton}>
          Home
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
      </a>
    </Link>
  );
};

export default ProjectButton;
