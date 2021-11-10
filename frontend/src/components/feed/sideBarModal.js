import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
// import StrainInfo from './strainInfo';

function StrainsModal(id) {
  const [showModal, setShowModal] = useState(false);
  const strains = useSelector(state => state.strain)

  return (
    <>
      <button id='formButton' onClick={() => setShowModal(true)}>Check In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>
              <p>{strains[id].description}</p>
              <button type='button'>Check In</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default StrainsModal;
