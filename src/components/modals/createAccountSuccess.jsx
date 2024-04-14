import React from 'react';
import withModal from './modalContent';
import Modal from './modal';
import YellowButton from '../buttons/yellowButton';

const SuccessfulAccount = ({ openModal, modalContent }) => {
  return (
    <div>

      {/* Custom modal content */}
      {modalContent && modalContent.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
      <YellowButton yellowBtn="Get Started" variant="long" >
      <button onClick={openModal}>Create Account </button>
      </YellowButton>
      
    </div>
  );
};

export default withModal(SuccessfulAccount);