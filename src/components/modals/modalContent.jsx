// import ResetPasswordModal from "./resetPasswordModal"
// const ModalContent = () => {
//     return(
//         <>
//             <div >
//                 I am modal content fform modal content
//             </div>
//         </>
//     )
// }

// export default ModalContent
import modalStyles from "./modals.module.css"
import Modal from './modal';
import React, { useState } from 'react';

const withModal = (Component) => {
  const ModalWrapper = ({ modalContent, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <>
        <Component {...props} openModal={openModal} />
        {isOpen && (
          <Modal onClose={closeModal}>
          {/* Custom content for the modal */}
          {modalContent}
        </Modal>
        )}
      </>
    );
  };

  return ModalWrapper;
};

export default withModal;
