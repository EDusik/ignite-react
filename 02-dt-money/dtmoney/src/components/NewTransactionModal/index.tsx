import Modal from "react-modal";

import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void,
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" type="text" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}