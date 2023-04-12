import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './seat.css'
const Seat = () =>{
return(
<div>
<div className="pilih">
  <h2>Pilihan Kamar</h2>
</div>
<div className="pilihan">
<Form.Select aria-label="Default select example">
  <option value="1"><a href="./standart">STANDART</a></option>
  <option value="2"><a href="">DELUXE</a></option>
  <option value="3"><a href="">SUPERIOR</a></option>
</Form.Select>
</div>
</div>
)
import React from "react";
import Button from "react-bootstrap/Button";

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTaken: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isTaken: !this.state.isTaken });
  }

  render() {
    const buttonVariant = this.state.isTaken ? "danger" : "success";

    return (
      <div>
        <Button
          variant={buttonVariant}
          onClick={this.handleClick}
          style={{ margin: "5px" }}
        >
          {this.state.isTaken ? "Terisi" : "Kosong"}
        </Button>
      </div>
    );
  }
}

export default Seat
