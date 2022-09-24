import React from "react";
import "../style.css";
import ListItem from "./ListItem";

const DoneListBox = ({ todos, onDelete, onCheck }) => {
  return (
    <div className="box">
      <h2>💙 완료 목록 💙</h2>
      <div className="list">
        {todos.map((todo) => (
          <ListItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default DoneListBox;
