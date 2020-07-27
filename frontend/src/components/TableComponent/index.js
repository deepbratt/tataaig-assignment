import React from "react";
import { Table } from "react-bootstrap";
import SingleRow from "./singleRow";
const TableComponent = (props) => {
  let totalCal = 0;
  for (let i = 0; i < props.data.length; i++) {
    totalCal += props.data[i]["mealCalorie"];
  }
  return (
    <Table striped hover responsive="md" cellSpacing={5} cellPadding={5}>
      <thead>
        <tr
          style={{
            backgroundColor: totalCal > 2000 ? "red" : "green",
            color: "#fff",
            alignItems: "flex-start",
            height: 20,
            fontSize: 16,
            textAlign: "left",
            whiteSpace: "normal",
          }}
        >
          <th>SL</th>
          <th>Meal Name</th>
          <th>Calories</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.data !== null ? (
          props.data.map((tbldata, tbindex) => {
            return <SingleRow data={tbldata} key={tbindex} id={tbindex + 1} />;
          })
        ) : (
          <tr>
            <td colSpan={3}>no data!</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableComponent;
