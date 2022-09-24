import React from "react";
import { Box, List } from "./StyleComponent";
import ListItem from "./ListItem";

const TodoListBox = ({ todos, onDelete, onCheck }) => {
  return (
    <Box>
      <h2>📝 할 일 목록 📝</h2>
      <List>
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

export default TodoListBox;
