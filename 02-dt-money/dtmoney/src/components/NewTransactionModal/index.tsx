import { useState, FormEvent, useContext } from "react";

import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void,
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const { createTransaction } = useContext(TransactionsContext);

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    createTransaction({ 
      type, 
      title, 
      category, 
      amount
    })
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" type="text" value={title} onChange={event => setTitle(event.target.value)} />
        <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType("deposit") }}
            isActive={type === "deposit"}
            activeColor="green"
          > 
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"  
            onClick={() => { setType("withdraw") }} 
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" type="text" value={category} onChange={event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}