import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import './style/mainRegister.css'

function MainRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password || !phoneNumber) {
      setShowAlert(true);
      setMessage("Mohon lengkapi data pendaftaran");
    } else {
      const user = { username, password, phoneNumber };
      const json = JSON.stringify(user);
      localStorage.setItem(username, json);
      setMessage("Pendaftaran berhasil");
      window.open('/userLogin', '_self');
    }
  }

  return (
    <center>
      <div className="registerUser">
        <div className="head-registerUser">
          <h1>Kooheng</h1>
        </div>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label className="label-login">USERNAME</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label-login">PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label className="label-login">NumberHp</Form.Label>
            <Form.Control
              type="tel"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit" className="h">
            Register
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="danger" className="alertLogin">
            {message}
          </Alert>
        )}
      </div>
    </center>
  );
}

export default MainRegister;
