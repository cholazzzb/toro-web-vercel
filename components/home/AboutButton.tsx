import Link from "next/link";
import Image from "next/image";
import ImageContainer from "components/ImageContainer";
import styles from "./AboutButton.module.css";
import { Blink } from "components/Animation";

const AboutButton = () => {
  return (
    <Link href="/about">
      <a>
        <button className={styles.aboutButton}>
          <Blink>
            <ImageContainer size={20} shape="round">
              <Image
                src="/icons/left.svg"
                alt="icon-button"
                layout="fill"
                objectFit="cover"
              />
            </ImageContainer>
          </Blink>
          About
        </button>
      </a>
    </Link>
  );
};

export default AboutButton;
