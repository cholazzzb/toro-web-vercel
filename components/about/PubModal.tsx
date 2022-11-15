import { Modal, ModalBody, ModalHeader } from 'components/Modal';
import Typography from 'components/Typography';
import PubCard from './PubCard';

import pubData from 'src/domains/publication/publicationData';

type PubModalProps = {
  onClose: () => void;
};

const PubModal = ({ onClose }: PubModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Publications</Typography>
      </ModalHeader>
      <ModalBody>
        {pubData.map((pub) => (
          <PubCard key={pub.title} data={pub} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default PubModal;
