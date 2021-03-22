import { useState } from "react";
import { TransactionsProvider } from "./TransactionsContext";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

