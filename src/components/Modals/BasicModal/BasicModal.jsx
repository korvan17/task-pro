import { createPortal } from 'react-dom';
import css from './BasicModal.module.css';
import { useEffect, useState } from 'react';

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
      <div className={css.modal}>
        {children}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus a
          ullam repudiandae magni, mollitia doloremque eveniet quod et excepturi
          in totam corporis, reiciendis, beatae distinctio debitis optio nihil
          omnis natus.
        </p>
      </div>
    </div>,
    modalRoot
  );
}
