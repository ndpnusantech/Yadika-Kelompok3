import { Button, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "../img/kamar.jpeg";
import "./datadiri.css";
import React, { useState } from "react";
import PilihanPembayaran from "./pilihanPembayaran/pilihanPembayaran";

const DataDiri = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    nik: "",
    alamat: "",
    checkin: "",
    checkout: "",
    noHp: "",
    permintaanKhusus: "",
    metodePembayaran: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);


  return (
    <div className="awal">
      <center>
        <h2 className="awalStandar">
          <b>Standar room</b>
        </h2>
      </center>
      <div className="datadiri">
        <h2>
          <b>Mengisi data diri</b>
        </h2>
        <br />
          <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Nama Lengkap"
            name="name"
            value={bookingData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="nik">
              <Form.Label>NIK</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukan Nik"
                name="nik"
                value={bookingData.nik}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="alamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter alamat"
              name="alamat"
              value={bookingData.alamat}
              onChange={handleInputChange}
            />
          </Form.Group>

          <collum className="mb-3">
            <Form.Group controlId="checkin">
              <Form.Label>Check-in</Form.Label>
              <Form.Control
                type="date"
                name="checkin"
                value={bookingData.checkin}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="checkout">
              <Form.Label>Check-out</Form.Label>
              <Form.Control
                type="date"
                name="checkout"
                value={bookingData.checkout}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="noHp">
              <Form.Label>No.HP</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter noHp"
                name="noHp"
                value={bookingData.noHp}
                onChange={handleInputChange}
              />
            </Form.Group>
          </collum>
          <br />

          <Form.Group
            className="mb-3"
            controlId="permintaanKhusus"
            height="100px"
          >
            <Form.Label>Permintaan Khusus</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter permintan"
            name="permintaan"
            value={bookingData.permintaan}
            onChange={handleInputChange}
          />
          </Form.Group>

          {/* PilihanPembayaran */}
          <PilihanPembayaran />
          <br />
          <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Sucses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Name:</b> {bookingData.name}</p>
          <p><b>Email:</b> {bookingData.email}</p>
          <p><b>Nik :</b> {bookingData.nik}</p>
          <p><b>Alamat :</b> {bookingData.alamat}</p>
          <p><b>Check-in:</b> {bookingData.checkin}</p>
          <p><b>Check-out:</b> {bookingData.checkout}</p>
          <p><b>No hp :</b> {bookingData.noHp}</p>
          <p><b>Metode Pembayaran :</b> {bookingData.noHp}</p>
          <p><b>Permintaan Khusus :</b> {bookingData.permintaan}</p>
        </Modal.Body>
        <Modal.Footer>
          <a href="/"><Button variant="secondary" onClick={handleClose}>
            Close
          </Button></a>
        </Modal.Footer>
      </Modal>
      </div>
      <div className="hotel">
        <Card style={{ width: "25rem" }}>
          <Card.Img src={Image} />
          <Card.Body>
            <Card.Title>Standar Room</Card.Title>
            <hr />
            <Card.Title>RP.500.000/Malam</Card.Title>
            <Card.Text>
              Standard Room merupakan kelas kamar terbawah dan hanya memiliki
              fasilitas yang terbatas, seperti tempat tidur, AC, TV,
              perlengkapan mandi, dan air minum
            </Card.Text>
            <hr />
            <Card.Title>Untuk Pembayaran DP minimal 30% Dari harga</Card.Title>
            {/* <Button variant="primary">PESAN</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default DataDiri;
