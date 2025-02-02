import React, { Fragment } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { LoginForm, SignupForm } from "../components";
function Home() {
  return (
    <Fragment>
      <div
        style={{ alignContent: "center", flex: 1, justifyContent: "center" }}
      >
        <Alert key={1} variant="primary">
          Welcome to Diet Checker
        </Alert>
      </div>

      <Container padder={10} style={{ marginBottom: 10 }}>
        <Row>
          <Col sm={12} md={6}>
            <LoginForm />
          </Col>

          <Col md={6} sm={12}>
            <SignupForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
