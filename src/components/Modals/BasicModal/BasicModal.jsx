import { createPortal } from 'react-dom';
import css from './BasicModal.module.css';
import { useEffect } from 'react';

//   const [showModal, setShowModal] = useState(true);
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

const modalRoot = document.querySelector('#modal-root');

export default function BasicModal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}
