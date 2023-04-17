import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({ buttonText , modalText, onDelete }) => {

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDelete = (onDelete) => {
    onDelete();
    handleClose();
  }

  return (
    <>
    <div className='d-grid'>
      <button className='btn delete-btns' onClick={handleShow}>{buttonText}</button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titleTexts'>Confrim delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className='titleTexts'>{modalText}</Modal.Body>
        <Modal.Footer>
          <button className='btn cancel-btns' onClick={handleClose}>
           Cancel
          </button>
          <button className='btn delete-btns' onClick={() => handleDelete(onDelete)}>
           Delete
          </button>
        </Modal.Footer>
    </Modal>
  </>
  )
}

export default DeleteModal