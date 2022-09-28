import React, { useState, useCallback, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DoneListBox from "./component/DoneListBox";
import InputBox from "./component/InputBox";
import TodoListBox from "./component/TodoListBox";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

html {
    background-color: rgb(0, 70, 42);
}
`;

const Wrapper = styled.div`
  font-family: "EarlyFontDiary";
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  width: 360px;
  padding: 20px;
  border-radius: 20px;
`;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "yayaya", checked: true },
    { id: 2, text: "yayaya", checked: false },
  ]);

  const doings = todos.filter((todo) => todo.checked === false);
  const dones = todos.filter((todo) => todo.checked === true);

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
    setTodos(todos.filter((todo) => todo.id !== id));
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
    <Wrapper>
      <GlobalStyle />
      <Container>
        <InputBox onConcat={onConcat} />
        <TodoListBox todos={doings} onDelete={onDelete} onCheck={onCheck} />
        <DoneListBox todos={dones} onDelete={onDelete} onCheck={onCheck} />
      </Container>
    </Wrapper>
  );
}

export default App;
