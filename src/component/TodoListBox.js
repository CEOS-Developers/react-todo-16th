import React from "react";
import "../style.css";
import ListItem from "./ListItem";

const TodoListBox = () => {
  return (
    <div className="box">
      <h2>📝 할 일 목록 📝</h2>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default TodoListBox;
