import React, { useState } from 'react';
import axios from 'axios';

function Check() {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [reason, setReason] = useState('');
  const [checkInData, setCheckInData] = useState([]);
  const [checkOutData, setCheckOutData] = useState([]);

  const handleCheckIn = () => {
    axios.post('/check_in', { name, id_number: idNumber, reason })
      .then(res => {
        console.log(res);
        setCheckInData([...checkInData, res.data]);
      })
      .catch(err => console.log(err));
  };

  const handleCheckOut = () => {
    axios.post('/check_out', { id_number: idNumber })
      .then(res => {
        console.log(res);
        setCheckOutData([...checkOutData, res.data]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>Check In/Check Out</h1>
      <div>
        <h2>Check In</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <label htmlFor="idNumber">ID Number:</label>
        <input type="text" id="idNumber" value={idNumber} onChange={e => setIdNumber(e.target.value)} />
        <br />
        <label htmlFor="reason">Reason:</label>
        <input type="text" id="reason" value={reason} onChange={e => setReason(e.target.value)} />
        <br />
        <button onClick={handleCheckIn}>Check In</button>
      </div>
      <div>
        <h2>Check Out</h2>
        <label htmlFor="idNumber">ID Number:</label>
        <input type="text" id="idNumber" value={idNumber} onChange={e => setIdNumber(e.target.value)} />
        <br />
        <button onClick={handleCheckOut}>Check Out</button>
      </div>
      <div>
        <h2>Check In Data</h2>
        <ul>
          {checkInData.map(data => <li key={data.id}>{data.name} - {data.id_number} - {data.reason}</li>)}
        </ul>
      </div>
      <div>
        <h2>Check Out Data</h2>
        <ul>
          {checkOutData.map(data => <li key={data.id}>{data.id_number} - {data.check_in_time} - {data.check_out_time}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Check