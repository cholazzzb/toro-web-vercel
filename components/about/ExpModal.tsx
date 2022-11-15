import { Modal, ModalBody, ModalHeader } from 'components/Modal';
import Typography from 'components/Typography';
import ExpCard from './ExpCard';

import { Experience } from 'src/domains/experience/experienceEntity';

type ExpModalProps = {
  experiences: Array<Experience>
  onClose: () => void;
};

const ExpModal = ({ experiences,onClose }: ExpModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Experience</Typography>
      </ModalHeader>
      <ModalBody>
        {experiences.map((exp) => (
          <ExpCard key={exp.role} data={exp} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default ExpModal;
