import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './editCommentForm';
import '../navigation/Navigation.css'

function CommentEditModal({comment, checkin}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='formButton' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm setShowModal={setShowModal} comment={comment} checkin={checkin}/>
        </Modal>
      )}
    </>
  );
}

export default CommentEditModal;
