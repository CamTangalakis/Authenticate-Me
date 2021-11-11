import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import StrainModal from '../checkins/StrainModal'
import './feed.css'

function StrainsModal({strain}, id) {
  const [showModal, setShowModal] = useState(false);
  const [showStrain, setShowStrain] = useState(false)

  return (
    <div>
      <button id='strainButtons' onClick={() => setShowStrain(true)}>{strain.name}</button>
      {showStrain && (
        <Modal onClose={() => setShowStrain(false)}>
          <div >
            <h1>{strain.name}</h1>
            <p>{strain.description}</p>
            <StrainModal
              // className='strainM'
              onClick={()=>setShowStrain(false)}
              setShowModal={setShowModal}
              showModal={showModal}
              strain={strain}/>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default StrainsModal;
