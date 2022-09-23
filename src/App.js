import React, { useState, useCallback, useRef } from "react";
import "./style.css";
import DoneListBox from "./component/DoneListBox";
import InputBox from "./component/InputBox";
import TodoListBox from "./component/TodoListBox";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "yayaya", checked: true },
    { id: 2, text: "yayaya", checked: false },
  ]);

  const nextId = useRef(3);
  const onConcat = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  return (
    <div className="wrapper">
      <div className="container">
        <InputBox onConcat={onConcat} />
        <TodoListBox todos={todos} />
        <DoneListBox />
      </div>
    </div>
  );
}

export default App;
