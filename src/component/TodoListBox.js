import React from "react";
import "../style.css";

const TodoListBox = () => {
  return (
    <div className="box">
      <h2>📝 할 일 목록 📝</h2>
      <ul className="list" id="todo-list"></ul>
    </div>
  );
};

export default TodoListBox;
