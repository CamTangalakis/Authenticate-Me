import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignUpForm';
import '../navigation/Navigation.css'

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='formButton' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
