import { Button,Dropdown } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "../img/kamar.jpeg";
import "./datadiri.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import PilihanPembayaran from "./pilihanPembayaran/pilihanPembayaran";

const DataDiri = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (eventKey) => {
    setSelectedPaymentMethod(eventKey);
  };
  return (
    <div className="awal">
      <center>
        <h2 className="awalStandar"><b>Standar room</b></h2>
      </center>
      <div className="datadiri">
        <h2><b>Mengisi data diri</b></h2>
        <br />
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control placeholder="Masukan Nama Lengkap" />
        </Form.Group>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>NIK</Form.Label>
              <Form.Control type="password" placeholder="Masukan NIK" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Alamat</Form.Label>
            <Form.Control placeholder="Masukan Alamat" />
          </Form.Group>

          <collum className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <div className="datePicker">
                <label>Check In</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="Check In"
                />
                <br />
                <br />
                <label>Check Out</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={checkInDate}
                  placeholderText="Check Out"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
              <br />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>No.HP</Form.Label>
              <Form.Control placeholder="Nomer HandPhone Anda" />
            </Form.Group>
          </collum>
          <br />

          <Form.Group
            className="mb-3"
            controlId="formGridAddress1"
            height="100px"
          >
            <Form.Label>Permintaan Khusus</Form.Label>
            <Form.Control placeholder="Permintaan khusus anda" />
          </Form.Group>

          <Form>
      <Form.Group controlId="paymentMethod">
        <Form.Label>Metode Pembayaran</Form.Label>
        <Dropdown onSelect={handlePaymentMethodChange}>
          <Dropdown.Toggle variant="secondary">
            {selectedPaymentMethod ? selectedPaymentMethod : 'Pilih metode pembayaran'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Transfer Bank"><PilihanPembayaran /></Dropdown.Item>
            <Dropdown.Item eventKey="Kartu Kredit">Kartu Kredit</Dropdown.Item>
            <Dropdown.Item eventKey="E-wallet">E-wallet</Dropdown.Item>
            <Dropdown.Item eventKey="Cod">Cod</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
    </Form>
    < br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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
