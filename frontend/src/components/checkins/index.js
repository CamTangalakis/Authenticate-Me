import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CheckinForm from './CheckinForm';
import Navigation from '../navigation';

function CheckinFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='formButton' onClick={() => setShowModal(true)}>Check In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CheckinForm />
        </Modal>
      )}
    </>
  );
}

export default CheckinFormModal;
