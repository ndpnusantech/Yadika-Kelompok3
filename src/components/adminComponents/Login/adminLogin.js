import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import './adminLogin.css'

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setShowAlert(true);
      setMessage("Mohon lengkapi data login");
    } else if (username === "admin1" && password === "123") {
      setMessage("Login berhasil");
      window.open("/", "_self");
    } else {
      setMessage("Login gagal");
    }
  };

  return (
    <center>
      <div className="container-adminLogin">
        <div className="head-adminLogin">
          <h1>Kooheng</h1>
        </div>
        <h1>Login</h1>
        <div className="input-adminLogin">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
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
            <br />
            <Button variant="primary" type="submit" className="h">
              Login
            </Button>
          </Form>

          {showAlert && (
            <Alert variant="danger" className="alertLogin">
              {message}
            </Alert>
          )}
        </div>
      </div>
    </center>
  );
}

export default AdminLogin;
