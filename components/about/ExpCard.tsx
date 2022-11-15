import Link from 'next/link';
import { IconButton } from 'components/Button';
import { CardHead, ColCard, RowCard } from 'components/Card';
import Divider from 'components/Divider';
import Typography from 'components/Typography';
import styles from './ExpCard.module.css';
import { Experience } from 'src/domains/experience/experienceEntity';

type ExpCardProps = {
  data: Experience;
};

const ExpCard = ({ data }: ExpCardProps) => {
  return (
    <div className={styles.container}>
      <RowCard>
        <CardHead justify="justifyBetween">
          <IconButton iconSrc={data.icon} size="large" />
          <div className={styles.headerText}>
            <h3>{data.role}</h3>
            <p>
              {data.time} - {data.location}
            </p>
          </div>
        </CardHead>
      </RowCard>
      <Divider type="horizontal" />
      <ColCard>
        {data.tasks.map((task) => (
          <Typography key={task}>{task}</Typography>
        ))}
        <Typography>Tech Stacks: {data.techs}</Typography>
        <Link href="/pdf/webTA.pdf">
          <a target="_blank" rel="noopener noreferrer">
            <IconButton iconSrc="/icons/link.svg" />
          </a>
        </Link>
      </ColCard>
    </div>
  );
};

export default ExpCard;
