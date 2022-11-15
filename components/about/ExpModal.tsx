import { Modal, ModalBody, ModalHeader } from 'components/Modal';
import Typography from 'components/Typography';
import ExpCard from './ExpCard';

import expData from 'src/repository/experience/experienceData';

type ExpModalProps = {
  onClose: () => void;
};

const ExpModal = ({ onClose }: ExpModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Experience</Typography>
      </ModalHeader>
      <ModalBody>
        {expData.map((exp) => (
          <ExpCard key={exp.role} data={exp} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default ExpModal;
