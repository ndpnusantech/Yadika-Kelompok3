import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./style/mainLogin.css";
import Success from "../success animation/success";

function MainLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setShowAlert(true);
      setMessage("Mohon lengkapi data login");
    } else {
      const user = { username, password };
      const json = JSON.stringify(user);
      localStorage.getItem(username, json);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(true);
        window.open("/", "_self");
      }, 1000);
    }
  };
  return (
    <center>
      {success ? (
        <Success success="success to login" />
      ) : (
        <div className="loginUser">
          <div className="head-loginUser">
            <h1>Kooheng</h1>
          </div>
          <h1>Login</h1>
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
      )}
    </center>
  );
}

export default MainLogin;
