import React from "react";
import { Box, List } from "./StyleComponent";
import ListItem from "./ListItem";

const DoneListBox = ({ todos, onDelete, onCheck }) => {
  return (
    <Box>
      <h2>💙 완료 목록 💙</h2>
      <List done={true}>
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

export default DoneListBox;
