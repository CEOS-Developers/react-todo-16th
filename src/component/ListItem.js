import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  .text {
    margin: 0rem 0.5rem;
    flex: 1;
  }
`;

const ListItem = ({ todo, onDelete }) => {
  const { id, text, checked } = todo;

  return (
    <Item>
      <div className="check">
        {checked ? <BsCheckCircleFill /> : <BsCircle />}
      </div>
      <div className="text">{text}</div>
      <div className="delete" onClick={() => onDelete(id)}>
        <AiFillDelete />
      </div>
    </Item>
  );
};

export default ListItem;
