import React from 'react';
import Button from 'react-bootstrap/Button';

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
    const buttonVariant = this.state.isTaken ? 'danger' : 'success';

    return (
      <div>
        <Button variant={buttonVariant} onClick={this.handleClick} style={{ margin: '5px' }}>
          {this.state.isTaken ? 'Terisi' : 'Kosong'}
        </Button>
      </div>
    );
  }
}

export default Seat;
