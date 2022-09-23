import React from "react";
import "./style.css";
import DoneListBox from "./component/DoneListBox";
import InputBox from "./component/InputBox";
import TodoListBox from "./component/TodoListBox";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <InputBox />
        <TodoListBox />
        <DoneListBox />
      </div>
    </div>
  );
}

export default App;
