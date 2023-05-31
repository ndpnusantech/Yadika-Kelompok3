import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./seat.css";
const Seat = () => {
  return (
    <div>
      <div className="pilih">
        <h2>Pilihan Kamar</h2>
      </div>
      <div className="pilihan">
        <Form.Select aria-label="Default select example">
          <option value="1">
            <a href="./standart">STANDART</a>
          </option>
          <option value="2">
            <a href="">DELUXE</a>
          </option>
          <option value="3">
            <a href="">SUPERIOR</a>
          </option>
        </Form.Select>
      </div>
    </div>
  );
};
export default Seat;
