import React from "react";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";

const ListItem = () => {
  return (
    <div>
      <div className="check">
        <AiOutlineCheckCircle />
        <div className="text">할 일</div>
      </div>
      <div className="delete">
        <AiFillDelete />
      </div>
    </div>
  );
};

export default ListItem;
