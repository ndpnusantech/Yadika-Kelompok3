import React from 'react';
import Seat from './seat';

class SeatList extends React.Component {
  render() {
    const seatListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100px',
      margin:'50px 400px',
      width:'400px',

      
    };

    return (
      <div style={seatListStyle}>
        {Array.from({ length: 20 }).map((_, index) => <Seat key={index} />)}
      </div>
    );
  }
}

export default SeatList;
