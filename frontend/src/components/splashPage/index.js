import { Modal } from '../../context/Modal';
import SplashPage from './splashPage'

function SplashModal({showSplash, setShowSplash}) {
  return (
    <div className='splashModal'>
      {showSplash && (
        <Modal onClose={() => setShowSplash(false)}>
          <SplashPage />
        </Modal>
      )}
    </div>
  );
}

export default SplashModal;
