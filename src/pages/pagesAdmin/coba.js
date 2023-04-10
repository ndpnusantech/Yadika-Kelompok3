import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function FormSubmit() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nik: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Data yang di-submit: 
      Nama Lengkap: ${formData.fullName}
      Email: ${formData.email}
      NIK: ${formData.nik}
      Alamat: ${formData.address}
    `);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Masukan Nama Lengkap"
        />
      </Form.Group>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>NIK</Form.Label>
            <Form.Control
              name="nik"
              value={formData.nik}
              onChange={handleInputChange}
              type="password"
              placeholder="Masukan NIK"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Masukan Alamat"
          />
        </Form.Group>

        <collum className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <div className="datePicker">
              {/* tambahkan code DatePicker di sini */}
            </div>
            <br />
          </Form.Group>
        </collum>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Form>
  );
}

export default FormSubmit;
