import React from "react";
import "../style.css";
import ListItem from "./ListItem";

const TodoListBox = ({ todos, onDelete }) => {
  return (
    <div className="box">
      <h2>📝 할 일 목록 📝</h2>
      <div className="list">
        {todos.map((todo) => (
          <ListItem todo={todo} key={todo.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoListBox;
