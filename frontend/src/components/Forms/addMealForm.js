import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/gen.utils";
const AddMealForm = (props) => {
  const user = useSelector((state) => state.userReducer.user);
  const [mealtext, setmMaltext] = useState(null);
  const [mealCalorie, setMealCalorie] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/meals/add`, {
        mealtext: mealtext,
        mealCalorie: mealCalorie,
        userId: user._id,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <Container padder={10}>
      <Card>
        <Card.Header>Add Meal</Card.Header>
        <Card.Body>
          <Form onSubmitCapture={(e) => submitForm(e)} key="mealForm">
            <Form.Group controlId="formBasicmealtext">
              <Form.Control
                type="text"
                placeholder="Enter meal name"
                name="mealtext"
                defaultValue={mealtext}
                onChange={(e) => setmMaltext(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCalorie">
              <Form.Control
                type="text"
                placeholder="Enter Calories"
                name="mealCalorie"
                defaultValue={mealCalorie}
                onChange={(e) => setMealCalorie(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddMealForm;
