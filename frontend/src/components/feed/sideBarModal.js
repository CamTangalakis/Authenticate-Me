import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import StrainModal from '../checkins/StrainModal'
// import StrainInfo from './strainInfo';

function StrainsModal({strain}, id) {
  const [showModal, setShowModal] = useState(false);
  const [showStrain, setShowStrain] = useState(false)
  const strains = useSelector(state => state.strain)

  return (
    <>
      <button id='formButton' onClick={() => setShowStrain(true)}>{strain.name}</button>
      {showStrain && (
        <Modal onClose={() => setShowStrain(false)}>
          <div>
              <p>{strain.description}</p>
              <StrainModal
                onClick={()=>setShowStrain(false)}
                setShowModal={setShowModal}
                showModal={showModal}
                strain={strain}/>
          </div>
        </Modal>
      )}
    </>
  );
}

export default StrainsModal;
