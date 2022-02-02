import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './feed.css'

function StrainsModal({strain}) {
  const [showStrain, setShowStrain] = useState(false)

  return (
    <div>
      <button id='strainButtons' onClick={() => setShowStrain(true)}>{strain.name}</button>
      {showStrain && (
        <Modal onClose={() => setShowStrain(false)}>
          <div className='strainDescriptions'>
            <h1 className='strainName'>{strain.name}</h1>
            <div className='leftPanel'>
              <img className='strainPhoto' src={strain.photo} />
              <div className='rightPanel'>
                <p className='strainDesText'>{strain.description}</p>
                <div className='strainInfo'>
                  <p className='info'>Brand: {strain.brand}</p>
                  <p className='info'>{strain.strainType}</p>
                </div>
              </div>
            </div>



            {/* <StrainModal
              // className='strainM'
              onClick={()=>setShowStrain(false)}
              setShowModal={setShowModal}
              showModal={showModal}
              strain={strain}/> */}
            {/* <button type='button' className='favoriteStrain'
            // onClick={()=>{
            //   await dispatch(favStrainActions.postFavStrain(userId, strainId))
            // }}
            >Favorite</button> */}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default StrainsModal;
