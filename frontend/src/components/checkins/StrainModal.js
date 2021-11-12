import { Modal } from '../../context/Modal';
import StrainCheckinForm from './StrainCheckinForm';
import '../navigation/Navigation.css'

function StrainModal({showModal, setShowModal, strain}) {
  return (
    <>
      <button id='formButton' onClick={() => setShowModal(true)}>Check In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <StrainCheckinForm setShowModal={setShowModal} strain={strain}/>
        </Modal>
      )}
    </>
  );
}

export default StrainModal;
