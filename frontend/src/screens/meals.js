import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AddMealForm, TableComponent } from "../components";
import { API_URL } from "../utils/gen.utils";
function Meals() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    (async () => {
      setLoader(true);
      axios.post(`${API_URL}/meals/get`, { userId: user._id }).then((res) => {
        setData(res.data);
        return false;
      });
    })();
  }, [user, data]);
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
            <TableComponent data={data} loader={loader} />
          </Col>

          <Col md={4} sm={12}>
            <AddMealForm data={data} setData={setData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Meals;
