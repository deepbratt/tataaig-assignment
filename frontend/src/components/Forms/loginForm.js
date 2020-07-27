import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import allActions from "../../actions";
import { API_URL } from "../../utils/gen.utils";
function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/users/login`, { email: email, password: password })
      .then((res) => {
        if (res.data !== "invalid") {
          dispatch(allActions.userActions.Login(res.data));
        } else {
          console.log(res.data);
        }
      });
  };
  return (
    <Container padder={10}>
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form onSubmitCapture={(e) => submitForm(e)} key="loginForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;
