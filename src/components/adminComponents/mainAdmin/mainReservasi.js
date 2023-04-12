import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactDOM from "react-dom";
import { Container, Button, Modal, Table, Form } from "react-bootstrap";

const MainReservasi =(props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Afif",
      type: "Deluxe",
      date: "10-April-2023",
      price: "100.000",
    },
    {
      id: 2,
      name: "Almustofa",
      type: "Deluxe",
      date: "10-April-2023",
      price: "100.000",
    },
    {
      id: 3,
      name: "Ajie",
      type: "Deluxe",
      date: "10-April-2023",
      price: "100.000",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    date: "",
    price: "",
  });
  
  const [editing, setEditing] = useState(false);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editing) {
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      setData([...data, { ...formData, id: newId }]);
    } else {
      setData(data.map((item) => (item.id === formData.id ? formData : item)));
      setEditing(false);
    }
    setFormData({ id: "", name: "", type: "", date: "", price: "" });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData(itemToEdit);
    setEditing(true);
    setModalShow(true);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodChange = (eventKey) => {
        setSelectedPaymentMethod(eventKey);
      };

  // set modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container">
      <Container className="p-2">
        <h1>Product List</h1>

        <Button
          className="mb-3"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Product
        </Button>

        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Tanggal Check-In</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td><Form>
        <Form.Group controlId="paymentMethod">
          <Dropdown onSelect={handlePaymentMethodChange}>
            <Dropdown.Toggle variant="secondary">
              {selectedPaymentMethod
                ? selectedPaymentMethod
                : "Status pembayaran"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Dibayar">
                Dibayar
              </Dropdown.Item>
              <Dropdown.Item eventKey="Belum Bayar">
                Belum dibayar
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </Form></td>
                <td>Rp.{item.price}</td>
                <td>
                  <Button
                    className="btn-sm"
                    variant="primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* modal */}

        <div>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={() => setModalShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Product Form
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <h2>{editing ? "Edit" : "Add"} Product</h2>

                {/* product name */}
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product type */}
                <Form.Group controlId="formBasicType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter type"
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product price */}
                <Form.Group controlId="formBasicSize">
                  <Form.Label>Check in date</Form.Label>
                  <Form.Control
                    type="teks"
                    placeholder="Check in date"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product price */}
                <Form.Group controlId="formBasicPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => setModalShow(false)}
                >
                  {editing ? "Save" : "Add"}
                </Button>
                <Button onClick={() => setModalShow(false)}>Close</Button>
              </Modal.Footer>

            </Form>
          </Modal>
        </div>

        {/* product form */}
      </Container>
    </div>
  );
}

ReactDOM.render(<MainReservasi />, document.getElementById("root"));
export default MainReservasi;