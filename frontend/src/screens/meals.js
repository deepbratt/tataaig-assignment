import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";
import { AddMealForm, TableComponent } from "../components";
import { API_URL } from "../utils/gen.utils";
function Meals() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const reduxStateChange = useSelector((state) => state);
  const user = reduxStateChange.userReducer.user;
  useEffect(() => {
    if (!data) {
      return false;
    }
    (async () => {
      setLoader(true);
      await axios
        .post(`${API_URL}/meals/get`, { userId: user._id })
        .then((res) => {
          setData(res.data);
          setLoader(false);
          return false;
        });
    })();
  }, [data, user]);

  const logout = async () => {
    await dispatch(allActions.userActions.Logout());
  };
  return (
    <Fragment>
      <div
        style={{ alignContent: "center", flex: 1, justifyContent: "center" }}
      >
        <Alert key={1} variant="primary">
          Welcome <b>{user.firstName}</b> <b>{user.lastName}</b> to Diet Checker{" "}
          <Button style={{ height: 40, padding: 5 }} onClick={logout}>
            {" "}
            logout{" "}
          </Button>
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
