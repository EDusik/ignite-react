import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}