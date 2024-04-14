

// const ResetPasswordModal = ({ children }) =>{
//     return(
        
//         <>
//             <div>
            
//                 <p>{children}</p>
            
//             </div>
//         </>
        
//     )
// }

// export default ResetPasswordModal

import React from 'react';
import withModal from './modalContent';
import Modal from './modal';
import resetStyles from "./modals.module.css"
import YellowButton from '../buttons/yellowButton';

const ResetPasswordModal = ({ openModal, modalContent }) => {
  return (
    <div>

        
        <YellowButton yellowBtn="Get Started" variant="long" >
        <button onClick={openModal}>Reset Password</button>
        </YellowButton>
        {/* Custom modal content */}
      {modalContent && modalContent.map((element, index) => (
        <div key={index}>{element}</div>
      ))}

        
      
    </div>
  );
};

export default withModal(ResetPasswordModal);
