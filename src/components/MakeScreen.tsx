import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next'); // Modal'in erişim denetimini iyileştirmek için kullanılır

export default function MakeScreen() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <>
      <button onClick={openModal}>Open Form</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Make Screen Form"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <form onSubmit={handleSubmit}>
          <h2>Create Escrow</h2>
          <input
            type="text"
            placeholder="Mint A Public Key"
          />
          <input
            type="text"
            placeholder="Mint B Public Key"
          />
          <input
            type="number"
            placeholder="Deposit Amount"
          />
          <input
            type="number"
            placeholder="Receive Amount"
          />
          <button type="submit">Create Escrow</button>
          <button type="button" onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </>
  );
}
