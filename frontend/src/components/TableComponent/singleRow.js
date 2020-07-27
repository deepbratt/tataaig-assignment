import React from "react";
const SingleRow = (props) => {
  console.log(props);
  return (
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
      <td>Action</td>
    </tr>
  );
};
export default SingleRow;
