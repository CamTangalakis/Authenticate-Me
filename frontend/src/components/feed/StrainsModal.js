import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import StrainModal from '../checkins/StrainModal'
// import * as favStrainActions from '../../store/favStrain'
import './feed.css'

function StrainsModal({strain}, id) {
  const dispatch = useDispatch()
  const userId = useSelector(state=>state.session?.user?.id)
  const [showModal, setShowModal] = useState(false);
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
