import React from "react";
const SingleRow = (props) => {
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
      <td>1</td>
      <td>rice</td>
      <td>150</td>
      <td>Action</td>
    </tr>
  );
};
export default SingleRow;
