import React, { Fragment, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { AddMealForm, TableComponent } from "../components";
function Meals() {
  const [data, setData] = useState([]);
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
          <Col md={8} sm={12}>
            <TableComponent />
          </Col>

          <Col md={4} sm={12}>
            <AddMealForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Meals;
