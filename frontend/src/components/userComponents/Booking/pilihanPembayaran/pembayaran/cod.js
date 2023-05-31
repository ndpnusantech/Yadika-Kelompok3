import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Cod = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src="./images/cod.jpg" width={40} variant="primary" onClick={handleShow} /><b onClick={handleShow}> COD</b>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <img src="./images/cod.jpg" width={40}/> Cash On Delivery</Modal.Title>
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

export default Cod