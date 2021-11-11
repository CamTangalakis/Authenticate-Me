import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SplashPage from './splashPage'

function SplashModal({showSplash, setShowSplash}) {
  return (
    <>
      {showSplash && (
        <Modal onClose={() => setShowSplash(false)}>
          <SplashPage />
        </Modal>
      )}
    </>
  );
}

export default SplashModal;
