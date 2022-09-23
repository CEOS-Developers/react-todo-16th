import React from "react";
import styled from "styled-components";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  .text {
    margin: 0rem 0.5rem;
    flex: 1;
  }
`;

const ListItem = () => {
  return (
    <Item>
      <div className="check">
        <AiOutlineCheckCircle />
      </div>
      <div className="text">할 일</div>
      <div className="delete">
        <AiFillDelete />
      </div>
    </Item>
  );
};

export default ListItem;
