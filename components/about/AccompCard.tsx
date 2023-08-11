import Link from 'next/link';

import { CardHead, ColCard, RowCard } from 'components/Card';
import Typography from 'components/Typography';
import { IconButton } from 'components/Button';

import styles from './AccompCard.module.css';
import Divider from 'components/Divider';
import { Accomplishment } from 'src/domains/accomplishment/accomplishmentEntity';

type AccompCardProps = {
  data: Accomplishment;
};

const AccompCard = ({ data }: AccompCardProps) => {
  return (
    <div className={styles.container}>
      <RowCard key={data.title}>
        <CardHead justify="justifyBetween">
          <IconButton iconSrc={data.icon} size="large" color="transparent" />
          <div className={styles.headerText}>
            <h3>{data.title}</h3>
            <p>
              {data.time} - {data.location}
            </p>
          </div>
        </CardHead>
      </RowCard>
      <Divider type="horizontal" />
      <ColCard>
        <Typography>{data.description}</Typography>
        <Typography>
          See the idea:
          <Link
            href={data.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.link}
          </Link>
        </Typography>
        <Typography>
          <Link href="/pdf/AIC.pdf" target="_blank" rel="noopener noreferrer">
            <IconButton iconSrc="/icons/link.svg" />
          </Link>
        </Typography>
      </ColCard>
    </div>
  );
};

export default AccompCard;
