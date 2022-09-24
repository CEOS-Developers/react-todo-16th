import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

const Button = styled.div`
  border: 0;
  background: none;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  .text {
    margin: 0rem 0.5rem;
    flex: 1;
  }
`;

const ListItem = ({ todo, onDelete, onCheck }) => {
  const { id, text, checked } = todo;

  return (
    <Item>
      <Button className="check" onClick={() => onCheck(id)}>
        {checked ? <BsCheckCircleFill /> : <BsCircle />}
      </Button>
      <div className="text">{text}</div>
      <Button className="delete" onClick={() => onDelete(id)}>
        <AiFillDelete />
      </Button>
    </Item>
  );
};

export default ListItem;
