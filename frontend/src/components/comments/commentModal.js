import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './editCommentForm';
import '../navigation/Navigation.css'

function CommentEditModal({comment, checkin}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='editCommentButton' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm setShowModal={setShowModal} comment={comment} checkin={checkin} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CommentEditModal;
