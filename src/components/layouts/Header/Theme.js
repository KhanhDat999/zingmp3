import Modal from 'react-modal';
// import { faShirt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {FaTshirt}  from 'react-icons/fa';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '70%',
    height: ' 90%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
 
  },
};

function Theme({ openModal }) {


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);



  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'red';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
      <FaTshirt style={{color : 'red'}} onClick={openModal} />

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Theme;