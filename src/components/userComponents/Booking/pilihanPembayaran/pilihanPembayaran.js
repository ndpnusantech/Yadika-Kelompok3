import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PilihanPembayaran() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src="./images/dana.png" width={40} variant="primary" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <img src="./images/dana.png" width={40}/>Dana</Modal.Title>
        </Modal.Header>
        <Modal.Body> <b>Checkin-CheckOut :</b> <br /> 28-03-2023 / 29-03-2023</Modal.Body>
        <Modal.Body>Harga : RP.500k</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Bayar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PilihanPembayaran