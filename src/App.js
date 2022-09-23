import React, { useState } from "react";
import "./style.css";
import DoneListBox from "./component/DoneListBox";
import InputBox from "./component/InputBox";
import TodoListBox from "./component/TodoListBox";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "yayaya", checked: true },
    { id: 2, text: "yayaya", checked: false },
  ]);

  return (
    <div className="wrapper">
      <div className="container">
        <InputBox />
        <TodoListBox todos={todos} />
        <DoneListBox />
      </div>
    </div>
  );
}

export default App;
