import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CheckinEditForm from './CheckinEditForm';
import '../navigation/Navigation.css'

function CheckinEditModal({showModal, setShowModal}) {
  return (
    <>
      <button type='button' onClick={setShowModal(true)}>Check In</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CheckinEditForm setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
  );
}

export default CheckinEditModal;
