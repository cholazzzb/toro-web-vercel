import { Modal, ModalBody, ModalHeader } from 'components/Modal';
import Typography from 'components/Typography';
import { Accomplishment } from 'src/domains/accomplishment/accomplishmentEntity';
import AccompCard from './AccompCard';

type AccompModalProps = {
  accomplishments: Array<Accomplishment>;
  onClose: () => void;
};
const AccompModal = ({ accomplishments, onClose }: AccompModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Accomplishments</Typography>
      </ModalHeader>
      <ModalBody>
        {accomplishments.map((accomp) => (
          <AccompCard key={accomp.title} data={accomp} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default AccompModal;
