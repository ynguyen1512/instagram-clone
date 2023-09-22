import React, { useState } from "react";
import Modal from "./Modal";

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is your modal content.</p>
      </Modal>
    </div>
  );
};

export default Search;
