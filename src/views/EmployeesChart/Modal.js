import React from 'react'

const Modal = ({closeModal , handleDelete }) => {
  return (
    <div className='modal-background'>
     <div className='modal-container'>
     <div className='title'>
     <img src='./cancel.png' alt="cancel icon"
     onClick={closeModal} className="close-btn" />
     <h2>Əməkdaş'ın silinməsi</h2>
        <p>Əməkdaş'ın silinməsinə əminsiniz?</p>
     </div>
     <div className='footer'>
         <button  className='cancel-btn' onClick={closeModal}>Xeyr</button>
         <button className='confirm-btn' onClick={handleDelete}>Bəli</button>
     </div>
     </div>
    </div>
  )
}

export default Modal;