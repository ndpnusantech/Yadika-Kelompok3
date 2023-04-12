import React, { useState } from 'react';
import './style/mainKamar.css'

const MainKamar = () => {
  const [counts, setCounts] = useState(Array(25).fill(0));

  const handleClick = (index) => {
    const newCounts = [...counts];
    newCounts[index] = (newCounts[index] + 1) % 3;
    setCounts(newCounts);
  }

  const getButtonColor = (count) => {
    switch (count) {
      case 1:
        return 'green';
      case 2:
        return 'red';
      default:
        return 'white';
    }
  }

  const renderTable = () => {
    const table = [];
    for (let i = 0; i < 5; i++) {
      const children = [];
      for (let j = 0; j < 5; j++) {
        const index = i * 5 + j;
        children.push(
          <td key={index}>
            <button
              style={{ backgroundColor: getButtonColor(counts[index]) }}
              onClick={() => handleClick(index)}
              className='button-adminKamar'
            >
              {index + 1}
            </button>
          </td>

        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  }

  return (
    <div className='semua'>
      <h4>Kondisi Kamar</h4>
    <div className='tabel'>
    <table>
      <tbody>
        {renderTable()}
      </tbody>
    </table>
    <td>
              <button className='ini1'>Dipesan</button><br />
              <button className='ini2'>Penuh</button><br />
              <button className='ini3'>Kosong</button>
            </td>
    </div>

    </div>
  );
}

export default MainKamar;
