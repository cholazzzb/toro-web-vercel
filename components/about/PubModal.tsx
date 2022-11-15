import { Modal, ModalBody, ModalHeader } from 'components/Modal';
import Typography from 'components/Typography';
import { Publication } from 'src/domains/publication/publicationEntity';
import PubCard from './PubCard';

type PubModalProps = {
  onClose: () => void;
  publications: Array<Publication>;
};

const PubModal = ({ publications, onClose }: PubModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Publications</Typography>
      </ModalHeader>
      <ModalBody>
        {publications.map((pub) => (
          <PubCard key={pub.title} data={pub} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default PubModal;
