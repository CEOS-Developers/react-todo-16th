import React from "react";
import styled, { css } from "styled-components";
import { Box } from "./StyleComponent";
import ListItem from "./ListItem";

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: hidden auto;

  ${({ type }) =>
    type == "done" &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

const ListBox = ({ type, title, todos, onDelete, onCheck }) => {
  return (
    <Box>
      <h2>{title}</h2>
      <List type={type}>
        {todos.map((todo) => (
          <ListItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </List>
    </Box>
  );
};

export default ListBox;
