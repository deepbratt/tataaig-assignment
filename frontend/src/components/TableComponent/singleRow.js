import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { API_URL } from "../../utils/gen.utils";
const SingleRow = (props) => {
  const [mealtext, setmMaltext] = useState(props.data.mealtext);
  const [mealCalorie, setMealCalorie] = useState(props.data.mealCalorie);
  const [isEdit, setIsEdit] = useState(false);
  const removeItem = (itmId) => {
    console.log("rem: ", itmId);
    axios.delete(`${API_URL}/meals/remove/${itmId}`).then((res) => {
      console.log("successfully removed", res.data);
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/meals/edit`, {
        mealId: props.data._id,
        mealtext: mealtext,
        mealCalorie: mealCalorie,
      })
      .then((res) => {
        setIsEdit(false);
        console.log(res.data);
      });
  };
  return (
    <Fragment key={`itmedit-${props.id}`}>
      <tr
        style={{
          alignItems: "flex-start",
          height: 20,
          fontSize: 14,
          textAlign: "left",
          whiteSpace: "normal",
        }}
      >
        <td>#{props.id}</td>
        <td>{props.data.mealtext}</td>
        <td>{props.data.mealCalorie}</td>
        <td>
          <span
            onClick={() => setIsEdit(!isEdit)}
            style={{ cursor: "pointer" }}
          >
            <MdModeEdit size={24} />
          </span>
          <span
            onClick={() => removeItem(props.data._id)}
            style={{ cursor: "pointer" }}
          >
            <BsFillTrashFill size={24} />
          </span>
        </td>
      </tr>
      {isEdit ? (
        <tr key={props.data._id}>
          <td colSpan={4}>
            <Card>
              <Card.Header>Update Meal</Card.Header>
              <Card.Body>
                <Form onSubmitCapture={(e) => submitForm(e)} key="mealForm">
                  <Form.Group controlId="formBasicmealtext">
                    <Form.Control
                      type="text"
                      placeholder="Enter meal name"
                      name="mealtext"
                      value={mealtext}
                      onChange={(e) => setmMaltext(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCalorie">
                    <Form.Control
                      type="number"
                      placeholder="Enter Calories"
                      name="mealCalorie"
                      value={mealCalorie}
                      onChange={(e) => setMealCalorie(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </td>
        </tr>
      ) : (
        <></>
      )}
    </Fragment>
  );
};
export default SingleRow;
