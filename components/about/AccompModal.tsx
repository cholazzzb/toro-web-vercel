import { Modal, ModalBody, ModalHeader } from "components/Modal";
import Typography from "components/Typography";

import accompData from "datas/accompData";
import AccompCard from "./AccompCard";

type AccompModalProps = {
  onClose: () => void;
};
const AccompModal = ({ onClose }: AccompModalProps) => {
  return (
    <Modal>
      <ModalHeader onClose={onClose}>
        <Typography>Accomplishments</Typography>
      </ModalHeader>
      <ModalBody>
        {accompData.map((accomp) => (
          <AccompCard key={accomp.title} data={accomp} />
        ))}
      </ModalBody>
    </Modal>
  );
};

export default AccompModal;
