import { Dropdown, Form } from "react-bootstrap";
import React, { useState } from "react";
import Dana from "./pembayaran/dana";
import Cod from "./pembayaran/cod";
const PilihanPembayaran = () =>{
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodChange = (eventKey) => {
        setSelectedPaymentMethod(eventKey);
      };
    
    return(
        <Form>
        <Form.Group controlId="paymentMethod">
        <Form.Label>Metode Pembayaran</Form.Label>
          <Dropdown onSelect={handlePaymentMethodChange}>
            <Dropdown.Toggle variant="secondary">
              {selectedPaymentMethod
                ? selectedPaymentMethod
                : "Pilih metode pembayaran"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Dana">
                <Dana />
              </Dropdown.Item>
              <Dropdown.Item eventKey="Cod"> <Cod /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </Form>
    )
}

export default PilihanPembayaran