import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
function SignupForm() {
  return (
    <Container padder={10}>
      <Card>
        <Card.Header>Signup</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="signup">
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter last name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignupForm;
