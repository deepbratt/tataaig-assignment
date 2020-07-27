import axios from "axios";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
// import { MdModeEdit } from "react-icons/md";
import { API_URL } from "../../utils/gen.utils";
const SingleRow = (props) => {
  const removeItem = (itmId) => {
    console.log("rem: ", itmId);
    axios.delete(`${API_URL}/meals/remove/${itmId}`).then((res) => {
      console.log("successfully removed", res.data);
    });
  };
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
      <td>
        <span>
          {/* <MdModeEdit size={24} /> */}
        </span>
        <span
          onClick={() => removeItem(props.data._id)}
          style={{ cursor: "pointer" }}
        >
          <BsFillTrashFill size={24} />
        </span>
      </td>
    </tr>
  );
};
export default SingleRow;
