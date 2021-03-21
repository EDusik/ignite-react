import { useState } from "react";

import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void,
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  
  const [type, setType] = useState("deposit");

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType("deposit") }}
            isActive={type === "deposit"}
          > 
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"  
            onClick={() => { setType("withdraw") }} 
            isActive={type === "withdraw"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" type="text" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}