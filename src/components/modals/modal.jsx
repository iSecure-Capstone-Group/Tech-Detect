// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import YellowButton from '../buttons/yellowButton';
// import ModalContent from './modalContent';

// function Example(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       {/* <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header> */}
//       <Modal.Body>
//         {/* <h4>Centered Modal</h4> */}
//         <p>
//           <ModalContent />
//           me
//         </p>
//         {/* <div>
//           <myContent />
//         </div> */}
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }

// function MyModal({ children }) {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically customised centered modal
//       </Button> */}
//       <p onClick={() => setModalShow(true)}>{children}</p>
      

//       <Example
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default MyModal


// import styles from "./modals.module.css"
// import YellowButton from "../buttons/yellowButton"
// import ModalContent from "./modalContent"
// import { useState } from "react"
// const Modal = ({children}) => {

//   const [showModal, setShowModal] = useState(false);
//   return(
//     <>
//       <div >
//         {showModal && 
//         <div className={styles.modal}>
//           <ModalContent />
//         </div>}

//         <div>
          
//           <p onClick={() => setShowModal(true)}>{children}</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Modal


import styles from "./modals.module.css"
const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.closeBtn}>
          <button onClick={onClose}>&#x2716;</button>
        </div>
        {children}
        
      </div>
    </div>
  );
};

export default Modal