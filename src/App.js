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

  // 추가
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

  // 삭제
  const onDelete = useCallback((id) => {
    // todos 배열에서 전달받은 id와 다른 것들만 넣기 = id가 같은 항목을 삭쩨
    setTodos(todos.filter((todo) => todo.id != id));
  });

  // 완료체크
  const onCheck = useCallback(
    (id) => {
      setTodos(
        // todo 배열에서 전달받은 id와 같으면 checked 불값만 변경 : 다르면 그대로
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="wrapper">
      <div className="container">
        <InputBox onConcat={onConcat} />
        <TodoListBox todos={todos} onDelete={onDelete} onCheck={onCheck} />
        <DoneListBox />
      </div>
    </div>
  );
}

export default App;
