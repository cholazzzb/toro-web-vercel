import { RowCard } from "components/Card";
import Divider from "components/Divider";
import { Publication } from "src/domains/publication/publicationEntity";
import styles from "./PubCard.module.css";

type PubCardProps = {
  data: Publication;
};

const PubCard = ({ data }: PubCardProps) => {
  return (
    <div className={styles.container}>
      <RowCard>
        <div className={styles.headerText}>
          <h3>{data.title}</h3>
          <p>{data.time}</p>
        </div>
      </RowCard>
      <Divider type="horizontal" />
    </div>
  );
};

export default PubCard;
