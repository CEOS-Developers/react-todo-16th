import React from "react";
import DoneListBox from "./component/DoneListBox";
import InputBox from "./component/InputBox";
import TodoListBox from "./component/TodoListBox";

function App() {
  return (
    <div className="container">
      <InputBox />
      <TodoListBox />
      <DoneListBox />
    </div>
  );
}

export default App;
