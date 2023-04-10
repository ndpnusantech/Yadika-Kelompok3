import React, { useState } from "react";
import "./style/mainReservasi.css";
import Table from 'react-bootstrap/Table';

const initialData = [
  { id: 1, name: "John Doe", amount: 100, jenis: 'Superior', status: 'dibayar' },
  { id: 2, name: "Jane Doe", amount: 200, jenis: 'Superior', status: 'dibayar' },
  { id: 3, name: "Bob Smith", amount: 300, jenis: 'Superior', status: 'dibayar' },
];

const PaymentTable = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ name: "", amount: "", jenis: "", id: "", status: "" });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newId = data.length + 1;
    setData([...data, { id: newId, ...formData }]);
    setFormData({ name: "", amount: "", jenis: "", status: "" });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newData = [...data];
    newData[editIndex] = formData;
    setData(newData);
    setFormData({ name: "", amount: "", jenis: "", status: "" });
    setEditMode(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className= 'containerTable'>
      <h2>Payment Table</h2>
      <Table striped bordered hover size="sm">
      <thead>
        <tr className="headText">
          <th>Name</th> 
          <th>No.kamar</th>
          <th>Jenis kamar</th>
          <th>Amount</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.jenis}</td>
                <td>Rp.{item.amount}</td>
                <td>{item.status}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    <div className="editTable">
      <h2>{editMode ? "Edit Payment" : "Add Payment"}</h2>
      <form onSubmit={editMode ? handleUpdate : handleAdd}>
        <label>
          Name:
          <input
            className="inputHarga"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Harga:
          <input
            className="inputHarga"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          No.kamar:
          <input
            className="inputHarga"
            type="number"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Jenis kamar:
          <input
            className="inputHarga"
            type="text"
            name="jenis"
            value={formData.jenis}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Status:
          <input
            className="inputHarga"
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>
      </div>
    </div>
  );
};

export default PaymentTable;
